import {MigrationInterface, QueryRunner} from "typeorm";

export class emptable1658211961315 implements MigrationInterface {
    name = 'emptable1658211961315'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "emp_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "emp_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "PK_1d437182cba7606e234a508771c" PRIMARY KEY ("emp_id")`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "emp_joining_date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "emp_experience" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "emp_address" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "emp_upload" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "emp_status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "emp_role" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_d62835db8c0aec1d18a5a927549"`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "department_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_d62835db8c0aec1d18a5a927549" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_d62835db8c0aec1d18a5a927549"`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "department_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_d62835db8c0aec1d18a5a927549" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "emp_role"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "emp_status"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "emp_upload"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "emp_address"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "emp_experience"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "emp_joining_date"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "PK_1d437182cba7606e234a508771c"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "emp_id"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "emp_name"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id")`);
    }

}
