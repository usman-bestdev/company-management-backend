import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetDefaultTimestampsForExistingRecords1726862914649 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Set default values for createdAt and updatedAt in Company table
    await queryRunner.query(`
      UPDATE "company"
      SET "createdAt" = NOW(), "updatedAt" = NOW()
      WHERE "createdAt" IS NULL OR "updatedAt" IS NULL;
    `);

    // Set default values for createdAt and updatedAt in ServiceFee table
    await queryRunner.query(`
      UPDATE "service_fee"
      SET "createdAt" = NOW(), "updatedAt" = NOW()
      WHERE "createdAt" IS NULL OR "updatedAt" IS NULL;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Optionally, you can reset timestamps to null when rolling back (optional)
    await queryRunner.query(`
      UPDATE "company"
      SET "createdAt" = NULL, "updatedAt" = NULL;
    `);

    await queryRunner.query(`
      UPDATE "service_fee"
      SET "createdAt" = NULL, "updatedAt" = NULL;
    `);
  }
}
