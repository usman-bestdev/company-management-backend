import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { ServiceFeeModule } from './service-fee/service-fee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'company_management_user',  // the new user you created
      password: '1234567890',
      database: 'companymanagement',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CompanyModule,
    ServiceFeeModule
  ],
})
export class AppModule {}
