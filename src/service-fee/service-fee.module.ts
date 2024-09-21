import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceFee } from 'src/entities/service-fee/service-fee.entity';
import { Company } from 'src/entities/company/company.entity'; 
import { ServiceFeeController } from './service-fee.controller';
import { ServiceFeeService } from './service-fee.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceFee, Company])], 
  controllers: [ServiceFeeController],
  providers: [ServiceFeeService],
})
export class ServiceFeeModule {}
