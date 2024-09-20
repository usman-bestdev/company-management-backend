import { Company } from 'src/entities/company/company.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,  // Default PostgreSQL port
    username: 'company_management_user',
    password: '1234567890',
    database: 'companymanagement',
    entities: [Company],
    migrations: ['./src/migrations/*.ts'],
    synchronize: false,
  });
  
