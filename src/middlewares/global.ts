import { Request, Response, NextFunction } from 'express';

export const logMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const { ip, method } = request;
    //console.log(ip, method);
    
    next();
}