import {MigrationInterface, QueryRunner} from "typeorm";

export class change1657700218960 implements MigrationInterface {
    name = 'change1657700218960'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employeeAddress" DROP CONSTRAINT "FK_99e99117bb9a6152f0e1e76e1e3"`);
        await queryRunner.query(`ALTER TABLE "employeeAddress" DROP CONSTRAINT "REL_99e99117bb9a6152f0e1e76e1e"`);
        await queryRunner.query(`ALTER TABLE "employeeAddress" DROP COLUMN "employee_address_id"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "employee_address_id" character varying`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "UQ_75ec3f5b3f68f8613ab0dbed286" UNIQUE ("employee_address_id")`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_75ec3f5b3f68f8613ab0dbed286" FOREIGN KEY ("employee_address_id") REFERENCES "employeeAddress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_75ec3f5b3f68f8613ab0dbed286"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "UQ_75ec3f5b3f68f8613ab0dbed286"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "employee_address_id"`);
        await queryRunner.query(`ALTER TABLE "employeeAddress" ADD "employee_address_id" uuid`);
        await queryRunner.query(`ALTER TABLE "employeeAddress" ADD CONSTRAINT "REL_99e99117bb9a6152f0e1e76e1e" UNIQUE ("employee_address_id")`);
        await queryRunner.query(`ALTER TABLE "employeeAddress" ADD CONSTRAINT "FK_99e99117bb9a6152f0e1e76e1e3" FOREIGN KEY ("employee_address_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
