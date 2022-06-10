import { ContatosRepository } from '../database/repositories';
import { contatosDTO } from '../dto';

export class ContatosService {
    async find() {
        const repository = new ContatosRepository();
        const contatos = await repository.find();

        return contatos;
    }

    async create(contatosDTO: contatosDTO) {
        const repository = new ContatosRepository();
        const contatos = await repository.create(contatosDTO);

        return contatos;
    }
}