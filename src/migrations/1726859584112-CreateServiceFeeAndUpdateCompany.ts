import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateServiceFeeAndUpdateCompany1726859584112 implements MigrationInterface {
    name = 'CreateServiceFeeAndUpdateCompany1726859584112'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."service_fee_assettype_enum" AS ENUM('BTC', 'GAS')`);
        await queryRunner.query(`CREATE TABLE "service_fee" ("id" SERIAL NOT NULL, "assetType" "public"."service_fee_assettype_enum" NOT NULL DEFAULT 'BTC', "gasPrice" double precision NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP NOT NULL, "activity" boolean NOT NULL DEFAULT true, "companyId" integer, CONSTRAINT "PK_70d082964aaa4bf193c2b1276e9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "service_fee" ADD CONSTRAINT "FK_853571ae7f95cc72511d81cf6ef" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_fee" DROP CONSTRAINT "FK_853571ae7f95cc72511d81cf6ef"`);
        await queryRunner.query(`DROP TABLE "service_fee"`);
        await queryRunner.query(`DROP TYPE "public"."service_fee_assettype_enum"`);
    }

}
