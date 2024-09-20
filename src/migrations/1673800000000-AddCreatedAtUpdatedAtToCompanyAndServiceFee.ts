import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCreatedAtUpdatedAtToCompanyAndServiceFee1673800000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Alter Company table to add createdAt and updatedAt columns
    await queryRunner.query(`
      ALTER TABLE "company"
      ADD COLUMN "createdAt" TIMESTAMP DEFAULT NOW(),
      ADD COLUMN "updatedAt" TIMESTAMP DEFAULT NOW();
    `);

    // Alter ServiceFee table to add createdAt and updatedAt columns
    await queryRunner.query(`
      ALTER TABLE "service_fee"
      ADD COLUMN "createdAt" TIMESTAMP DEFAULT NOW(),
      ADD COLUMN "updatedAt" TIMESTAMP DEFAULT NOW();
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop the columns if we roll back the migration
    await queryRunner.query(`
      ALTER TABLE "company"
      DROP COLUMN "createdAt",
      DROP COLUMN "updatedAt";
    `);

    await queryRunner.query(`
      ALTER TABLE "service_fee"
      DROP COLUMN "createdAt",
      DROP COLUMN "updatedAt";
    `);
  }
}
