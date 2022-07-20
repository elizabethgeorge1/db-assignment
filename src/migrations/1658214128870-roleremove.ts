import {MigrationInterface, QueryRunner} from "typeorm";

export class roleremove1658214128870 implements MigrationInterface {
    name = 'roleremove1658214128870'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "role"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ADD "role" character varying`);
    }

}
