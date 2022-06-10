"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const application = new app_1.default();
const port = process.env.PORT ? Number(process.env.PORT) : 8080;
application.init();
application.start(port);
