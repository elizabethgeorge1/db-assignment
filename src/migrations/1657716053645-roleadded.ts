import {MigrationInterface, QueryRunner} from "typeorm";

export class roleadded1657716053645 implements MigrationInterface {
    name = 'roleadded1657716053645'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ADD "role" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "role"`);
    }

}
