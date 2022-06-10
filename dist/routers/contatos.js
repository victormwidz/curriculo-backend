"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contatos_1 = __importDefault(require("../controllers/contatos"));
class ContatosRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new contatos_1.default();
        routes.get('/contatos', controller.index);
        routes.post('/contatos', controller.store);
        return routes;
    }
}
exports.default = ContatosRoutes;
