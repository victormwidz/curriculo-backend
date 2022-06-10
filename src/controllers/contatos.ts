import { Request, Response } from 'express';
import { ContatosService } from '../services';
import { HttpError } from '../errors';
import { defaultErrorMessage, HttpInternalErrorCode } from '../constants';
 
export default class ContatosController {
    async index(request: Request, response: Response) {
        const service = new ContatosService();

        try {
            const contatos = await service.find();
    
            return response.json(contatos.map(contato => {
                return {
                    id: contato.id,
                    nome: contato.nome,
                    telefone: contato.telefone,
                    email: contato.email
                }
            }));
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }

    async store(request: Request, response: Response) {
        const { nome, telefone, email } = request.body;
        const service = new ContatosService();

        try {
            const contatos = await service.create({
                nome,
                telefone,
                email                
            });

            return response.json(contatos);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }
};