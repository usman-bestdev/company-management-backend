import { setSeederFactory } from 'typeorm-extension';
import { ServiceFee, AssetType } from '../entities/service-fee/service-fee.entity';
import { Company } from '../entities/company/company.entity';

export const ServiceFeeFactory = setSeederFactory(ServiceFee, (faker) => {
  const serviceFee = new ServiceFee();
  serviceFee.assetType = faker.helpers.arrayElement([AssetType.BTC, AssetType.GAS]);
  serviceFee.gasPrice = faker.number.float({ min: 0.1, max: 10 });
  serviceFee.startDate = faker.date.past();
  serviceFee.endDate = faker.date.future();
  serviceFee.activity = faker.datatype.boolean();
  // serviceFee.company = faker.datatype.randomize([new Company()]); // Assuming you have a Company factory or predefined companies
  serviceFee.createdAt = new Date();
  serviceFee.updatedAt = new Date();
  return serviceFee;
});