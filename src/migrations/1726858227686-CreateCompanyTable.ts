import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCompanyTable1726858227686 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE company (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                status VARCHAR(50) NOT NULL CHECK (status IN ('pending', 'active', 'suspended')),
                last_activity TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE company;
        `);
    }

}
