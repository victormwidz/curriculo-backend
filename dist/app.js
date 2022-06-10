"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Application_express;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Database_1 = __importDefault(require("./database/connections/Database"));
const middlewares_1 = require("./middlewares");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class Application {
    constructor() {
        _Application_express.set(this, void 0);
        __classPrivateFieldSet(this, _Application_express, (0, express_1.default)(), "f");
    }
    async init() {
        this.config();
        this.middlewares();
        this.routers();
        this.errors();
        await this.database();
    }
    start(port) {
        __classPrivateFieldGet(this, _Application_express, "f").listen(port, () => {
            console.log(`A aplicação está rodando na porta ${port}...`);
        });
    }
    config() {
        __classPrivateFieldGet(this, _Application_express, "f").use(express_1.default.json());
        __classPrivateFieldGet(this, _Application_express, "f").use(express_1.default.urlencoded({ extended: false }));
        __classPrivateFieldGet(this, _Application_express, "f").use((0, cors_1.default)());
    }
    middlewares() {
        __classPrivateFieldGet(this, _Application_express, "f").use(middlewares_1.logMiddleware);
    }
    errors() {
        __classPrivateFieldGet(this, _Application_express, "f").use((error, request, response, next) => {
            return response.status(error.status).json({
                mensagem: error.message
            });
        });
    }
    routers() {
        const routersPath = path_1.default.resolve(__dirname, 'routers');
        // TODO: refatorar para buscar apenas arquivos que implmentar a interface HttpRouter
        fs_1.default.readdirSync(routersPath).forEach(filename => {
            Promise.resolve().then(() => __importStar(require(path_1.default.resolve(routersPath, filename)))).then(file => {
                const instance = new file.default();
                __classPrivateFieldGet(this, _Application_express, "f").use(instance.init());
            });
        });
    }
    async database() {
        await Database_1.default.getInstance();
    }
}
exports.default = Application;
_Application_express = new WeakMap();
;
