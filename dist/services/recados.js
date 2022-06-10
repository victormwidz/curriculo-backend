"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecadosService = void 0;
const repositories_1 = require("../database/repositories");
class RecadosService {
    async find() {
        const repository = new repositories_1.RecadosRepository();
        const recados = await repository.find();
        return recados;
    }
    async create(recadosDTO) {
        const repository = new repositories_1.RecadosRepository();
        const recados = await repository.create(recadosDTO);
        return recados;
    }
}
exports.RecadosService = RecadosService;
