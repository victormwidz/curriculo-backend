import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableContatos1649284296470 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'contatos',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    length: '255',
                    isNullable: false
                },
                {
                    name: 'telefone',
                    type: 'varchar',
                    length: '255',
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '255',
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('contatos', true, true, true);
    }
}
