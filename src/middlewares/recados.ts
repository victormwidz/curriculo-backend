import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors';
import { HttpBadRequestCode, invalidField } from '../constants';

export const recadosValidateMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const { recado } = request.body;

    if (recado.length < 3 || recado.length > 255) {
        throw new HttpError(invalidField('recado'), HttpBadRequestCode);
    }
    
    next();
}