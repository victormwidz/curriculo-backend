"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecadosRepository = void 0;
const entities_1 = require("../entities");
class RecadosRepository {
    async find() {
        const recados = await entities_1.RecadosEntity.find();
        return recados;
    }
    async create(recadosDTO) {
        const recados = await new entities_1.RecadosEntity(recadosDTO.nome, recadosDTO.recado);
        recados.save();
        return recados;
    }
}
exports.RecadosRepository = RecadosRepository;
