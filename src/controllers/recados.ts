import { Request, Response } from 'express';
import { RecadosService } from '../services';
import { HttpError } from '../errors';
import { defaultErrorMessage, HttpInternalErrorCode } from '../constants';
 
export default class RecadosController {
    async index(request: Request, response: Response) {
        const service = new RecadosService();

        try {
            const recados = await service.find();
    
            return response.json(recados.map(recado => {
                return {
                    id: recado.id,
                    nome: recado.nome,
                    recado: recado.recado
                }
            }));
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }

    async store(request: Request, response: Response) {
        const { nome, recado } = request.body;
        const service = new RecadosService();

        try {
            const recados = await service.create({
                nome,
                recado                
            });

            return response.json(recados);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }
};