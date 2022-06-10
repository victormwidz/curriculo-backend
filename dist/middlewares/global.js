"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
const logMiddleware = (request, response, next) => {
    const { ip, method } = request;
    //console.log(ip, method);
    next();
};
exports.logMiddleware = logMiddleware;
