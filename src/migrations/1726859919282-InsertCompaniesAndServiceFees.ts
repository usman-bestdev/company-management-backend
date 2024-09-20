import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCompaniesAndServiceFees1726859919282 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Insert 10 companies and return their ids
    const companies = await queryRunner.query(`
      INSERT INTO company (name, status, "lastActivity") VALUES
      ('Company 1', 'active', NOW()),
      ('Company 2', 'active', NOW()),
      ('Company 3', 'pending', NOW()),
      ('Company 4', 'suspended', NOW()),
      ('Company 5', 'active', NOW()),
      ('Company 6', 'active', NOW()),
      ('Company 7', 'pending', NOW()),
      ('Company 8', 'suspended', NOW()),
      ('Company 9', 'active', NOW()),
      ('Company 10', 'active', NOW())
      RETURNING id;
    `);

    // Dynamically associate service fees based on returned company IDs
    for (const company of companies) {
      const companyId = company.id;
      // Insert 2-4 service fees per company
      await queryRunner.query(`
        INSERT INTO service_fee ("assetType", "gasPrice", "startDate", "endDate", "activity", "companyId") VALUES
        ('BTC', 100.50, NOW(), NOW() + INTERVAL '30 days', true, ${companyId}),
        ('GAS', 50.75, NOW(), NOW() + INTERVAL '30 days', true, ${companyId}),
        ('BTC', 150.25, NOW(), NOW() + INTERVAL '60 days', true, ${companyId});
      `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove service fees for the first 10 companies
    await queryRunner.query(`DELETE FROM service_fee WHERE "companyId" IN (SELECT id FROM company WHERE id <= 10);`);
    
    // Remove the first 10 companies
    await queryRunner.query(`DELETE FROM company WHERE id <= 10;`);
  }
}
