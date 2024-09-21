import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { ServiceFeeModule } from './service-fee/service-fee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',  // the new user you created
      password: 'mysecretpassword',
      database: 'company-management-db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CompanyModule,
    ServiceFeeModule
  ],
})
export class AppModule {}
