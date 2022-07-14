import {MigrationInterface, QueryRunner} from "typeorm";

export class add1657700098248 implements MigrationInterface {
    name = 'add1657700098248'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_75ec3f5b3f68f8613ab0dbed286"`);
        await queryRunner.query(`CREATE TABLE "employeeAddress" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "employee_address_id" uuid, CONSTRAINT "REL_99e99117bb9a6152f0e1e76e1e" UNIQUE ("employee_address_id"), CONSTRAINT "PK_ac3d45d4ca345abf2de9a4f6f8c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "UQ_75ec3f5b3f68f8613ab0dbed286"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "employee_address_id"`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "employeeAddress" ADD CONSTRAINT "FK_99e99117bb9a6152f0e1e76e1e3" FOREIGN KEY ("employee_address_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employeeAddress" DROP CONSTRAINT "FK_99e99117bb9a6152f0e1e76e1e3"`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "employee_address_id" uuid`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "UQ_75ec3f5b3f68f8613ab0dbed286" UNIQUE ("employee_address_id")`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "employeeAddress"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_75ec3f5b3f68f8613ab0dbed286" FOREIGN KEY ("employee_address_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
