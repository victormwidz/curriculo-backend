"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recadosValidateMiddleware = void 0;
const errors_1 = require("../errors");
const constants_1 = require("../constants");
const recadosValidateMiddleware = (request, response, next) => {
    const { recado } = request.body;
    if (recado.length < 3 || recado.length > 255) {
        throw new errors_1.HttpError((0, constants_1.invalidField)('recado'), constants_1.HttpBadRequestCode);
    }
    next();
};
exports.recadosValidateMiddleware = recadosValidateMiddleware;
