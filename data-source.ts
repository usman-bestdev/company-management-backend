import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,  // PostgreSQL default port
  username: 'postgres',  // Your PostgreSQL username
  password: 'mysecretpassword',               // Your PostgreSQL password
  database: 'company-management-db',        // Your database name
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'], 
  synchronize: true,                   // Disable in production, use migrations instead
  
});
