"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const errors_1 = require("../errors");
const constants_1 = require("../constants");
class ContatosController {
    async index(request, response) {
        const service = new services_1.ContatosService();
        try {
            const contatos = await service.find();
            return response.json(contatos.map(contato => {
                return {
                    id: contato.id,
                    nome: contato.nome,
                    telefone: contato.telefone,
                    email: contato.email
                };
            }));
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
    }
    async store(request, response) {
        const { nome, telefone, email } = request.body;
        const service = new services_1.ContatosService();
        try {
            const contatos = await service.create({
                nome,
                telefone,
                email
            });
            return response.json(contatos);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
    }
}
exports.default = ContatosController;
;
