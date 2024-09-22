import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { faker } from "@faker-js/faker";
import { Company } from "../entities/company/company.entity"
import { ServiceFee } from "../entities/service-fee/service-fee.entity";

export class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const companyRepository = dataSource.getRepository(Company);
    const serviceFeeRepository = dataSource.getRepository(ServiceFee);

    const companyFactory = factoryManager.get(Company);
    const serviceFeeFactory = factoryManager.get(ServiceFee);

    // Seed Companies
    const companies = await companyFactory.saveMany(5);

    // Seed ServiceFees
    const serviceFees = await Promise.all(
      Array(20)
        .fill("")
        .map(async () => {
          const serviceFee = await serviceFeeFactory.make({
            company: faker.helpers.arrayElement(companies),
          });
          return serviceFee;
        }),
    );
    await serviceFeeRepository.save(serviceFees);
  }
}