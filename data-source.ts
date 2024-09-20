import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,  // PostgreSQL default port
  username: 'company_management_user',  // Your PostgreSQL username
  password: '1234567890',               // Your PostgreSQL password
  database: 'companymanagement',        // Your database name
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'], 
  migrations: ['./src/migrations/*.ts'],// Path to your migrations
  synchronize: false,                   // Disable in production, use migrations instead
});
