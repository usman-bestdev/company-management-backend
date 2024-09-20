import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ServiceFee } from 'src/entities/service-fee/service-fee.entity';
import { ServiceFeeService } from './service-fee.service';

@Controller('service-fee')
export class ServiceFeeController {
  constructor(private readonly serviceFeeService: ServiceFeeService) {}

  @Get()
  findAll(@Query('companyId') companyId: string) {
    return this.serviceFeeService.findAllByCompany(companyId);
  }

  @Post()
  create(@Body() serviceFee: ServiceFee) {
    return this.serviceFeeService.create(serviceFee);
  }
}
