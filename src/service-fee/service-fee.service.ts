import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/entities/company/company.entity';
import { ServiceFee } from 'src/entities/service-fee/service-fee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceFeeService {
  constructor(
    @InjectRepository(ServiceFee)
    private serviceFeeRepository: Repository<ServiceFee>,

    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  async findAll(): Promise<ServiceFee[]> {
    return this.serviceFeeRepository.find({ relations: ['company'] });
  }

  async findAllByCompany(companyId: string): Promise<ServiceFee[]> {
    const companyIdAsNumber = Number(companyId);
    return this.serviceFeeRepository.find({
      where: { company: { id: companyIdAsNumber } },
      relations: ['company'],
    });
  }

  async create(serviceFee: ServiceFee): Promise<ServiceFee> {
    // Find the company by ID before saving the service fee
    const company = await this.companyRepository.findOne({
      where: { id: serviceFee.company.id },
    });

    if (!company) {
      throw new Error('Company not found');
    }

    // Assign the found company to the service fee
    serviceFee.company = company;

    // Save the service fee
    return this.serviceFeeRepository.save(serviceFee);
  }
}
