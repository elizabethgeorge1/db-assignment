import {MigrationInterface, QueryRunner} from "typeorm";

export class adddcolumnaddress1657705017123 implements MigrationInterface {
    name = 'adddcolumnaddress1657705017123'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_75ec3f5b3f68f8613ab0dbed286"`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "employee_address_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_75ec3f5b3f68f8613ab0dbed286" FOREIGN KEY ("employee_address_id") REFERENCES "employeeAddress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_75ec3f5b3f68f8613ab0dbed286"`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "employee_address_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_75ec3f5b3f68f8613ab0dbed286" FOREIGN KEY ("employee_address_id") REFERENCES "employeeAddress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
