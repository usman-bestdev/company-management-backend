import { Controller, Get, Post, Body } from '@nestjs/common';
import { ServiceFeeService } from './service-fee.service';
import { ServiceFee } from 'src/entities/service-fee/service-fee.entity';

@Controller('service-fee')
export class ServiceFeeController {
  constructor(private readonly serviceFeeService: ServiceFeeService) {}

  @Get()
  findAll() {
    return this.serviceFeeService.findAll();
  }

  @Post()
  create(@Body() serviceFee: ServiceFee) {
    return this.serviceFeeService.create(serviceFee);
  }
}
