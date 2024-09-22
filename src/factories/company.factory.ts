import { setSeederFactory } from "typeorm-extension";
import { Company, CompanyStatus } from "../entities/company/company.entity";

export const CompanyFactory = setSeederFactory(Company, (faker) => {
  const company = new Company();
  company.name = faker.company.name();
  company.status = faker.helpers.arrayElement([CompanyStatus.PENDING, CompanyStatus.ACTIVE]);
  company.createdAt = new Date();
  company.updatedAt = new Date();
  return company;
});