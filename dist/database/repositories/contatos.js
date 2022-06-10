"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContatosRepository = void 0;
const entities_1 = require("../entities");
class ContatosRepository {
    async find() {
        const contatos = await entities_1.ContatosEntity.find();
        return contatos;
    }
    async create(contatosDTO) {
        const contatos = await new entities_1.ContatosEntity(contatosDTO.nome, contatosDTO.telefone, contatosDTO.email);
        contatos.save();
        return contatos;
    }
}
exports.ContatosRepository = ContatosRepository;
