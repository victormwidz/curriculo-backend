"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class Database {
    constructor() { }
    static async getInstance() {
        if (!Database.instance) {
            const database = new Database();
            Database.instance = await database.openConnection();
        }
        return Database.instance;
    }
    async openConnection() {
        try {
            return await (0, typeorm_1.createConnection)();
        }
        catch (error) {
            throw new Error(`Erro ao conectar no banco: ${error}`);
        }
    }
}
exports.default = Database;
