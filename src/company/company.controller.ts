import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from 'src/entities/company/company.entity';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(@Body() company: Partial<Company>) {
    return this.companyService.create(company);
  }

  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() company: Partial<Company>) {
    return this.companyService.update(+id, company);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}
