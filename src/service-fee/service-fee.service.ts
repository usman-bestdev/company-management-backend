import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceFee } from 'src/entities/service-fee/service-fee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceFeeService {
  constructor(
    @InjectRepository(ServiceFee)
    private serviceFeeRepository: Repository<ServiceFee>,
  ) {}

  findAll(): Promise<ServiceFee[]> {
    return this.serviceFeeRepository.find({ relations: ['company'] });
  }

  create(serviceFee: ServiceFee): Promise<ServiceFee> {
    return this.serviceFeeRepository.save(serviceFee);
  }
}
