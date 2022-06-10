"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContatosService = void 0;
const repositories_1 = require("../database/repositories");
class ContatosService {
    async find() {
        const repository = new repositories_1.ContatosRepository();
        const contatos = await repository.find();
        return contatos;
    }
    async create(contatosDTO) {
        const repository = new repositories_1.ContatosRepository();
        const contatos = await repository.create(contatosDTO);
        return contatos;
    }
}
exports.ContatosService = ContatosService;
