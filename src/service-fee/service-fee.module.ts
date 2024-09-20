import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceFee } from 'src/entities/service-fee/service-fee.entity';
import { ServiceFeeController } from './service-fee.controller';
import { ServiceFeeService } from './service-fee.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceFee])],
  controllers: [ServiceFeeController],
  providers: [ServiceFeeService],
})
export class ServiceFeeModule {}
