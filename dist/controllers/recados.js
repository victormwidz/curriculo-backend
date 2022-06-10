"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const errors_1 = require("../errors");
const constants_1 = require("../constants");
class RecadosController {
    async index(request, response) {
        const service = new services_1.RecadosService();
        try {
            const recados = await service.find();
            return response.json(recados.map(recado => {
                return {
                    id: recado.id,
                    nome: recado.nome,
                    recado: recado.recado
                };
            }));
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
    }
    async store(request, response) {
        const { nome, recado } = request.body;
        const service = new services_1.RecadosService();
        try {
            const recados = await service.create({
                nome,
                recado
            });
            return response.json(recados);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
    }
}
exports.default = RecadosController;
;
