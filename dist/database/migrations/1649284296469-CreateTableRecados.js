"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRecados1649284296469 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableRecados1649284296469 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'recados',
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
                    name: 'recado',
                    type: 'varchar',
                    length: '255',
                    isNullable: false
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('recados', true, true, true);
    }
}
exports.CreateTableRecados1649284296469 = CreateTableRecados1649284296469;
