// seed.ts
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { runSeeders, SeederOptions } from "typeorm-extension";
import { Company } from "./src/entities/company/company.entity";
import { ServiceFee } from "./src/entities/service-fee/service-fee.entity";
import { CompanyFactory } from "./src/factories/company.factory";
import { ServiceFeeFactory } from "./src/factories/service-fee.factory";
import { MainSeeder } from "./src/seeder/main.seeder";
import * as dotenv from 'dotenv';
dotenv.config();
const {
  DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE,
} = process.env;

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host:  DB_HOST,
  port:  parseInt(DB_PORT, 10),
  username: DB_USER,  // Your PostgreSQL username
  password: DB_PASSWORD,  // Your PostgreSQL password
  database:  DB_DATABASE,        // Your database name
  synchronize: true, // Disable in production, use migrations instead
  entities: [Company, ServiceFee],
  // additional config options brought by typeorm-extension
  factories: [CompanyFactory, ServiceFeeFactory],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);

dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
});