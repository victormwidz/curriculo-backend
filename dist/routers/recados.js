"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recados_1 = __importDefault(require("../controllers/recados"));
class RecadosRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new recados_1.default();
        routes.get('/recados', controller.index);
        routes.post('/recados/', controller.store);
        return routes;
    }
}
exports.default = RecadosRoutes;
