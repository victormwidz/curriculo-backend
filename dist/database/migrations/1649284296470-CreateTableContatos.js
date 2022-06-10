"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableContatos1649284296470 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableContatos1649284296470 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
    async down(queryRunner) {
        await queryRunner.dropTable('contatos', true, true, true);
    }
}
exports.CreateTableContatos1649284296470 = CreateTableContatos1649284296470;
