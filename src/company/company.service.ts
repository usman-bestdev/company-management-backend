import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/entities/company/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  create(company: Partial<Company>) {
    const newCompany = this.companyRepository.create(company);
    return this.companyRepository.save(newCompany);
  }

  findAll() {
    return this.companyRepository.find();
  }

  findOne(id: number) {
    return this.companyRepository.findOneBy({ id });
  }

  update(id: number, updateData: Partial<Company>) {
    return this.companyRepository.update(id, updateData);
  }

  remove(id: number) {
    return this.companyRepository.delete(id);
  }
}
