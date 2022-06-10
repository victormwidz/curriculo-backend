import { ContatosEntity } from '../entities';
import { contatosDTO } from '../../dto';

export class ContatosRepository {
    async find() {
        const contatos = await ContatosEntity.find();

        return contatos;
    }

    async create(contatosDTO: contatosDTO) {
        const contatos = await new ContatosEntity(contatosDTO.nome, contatosDTO.telefone, contatosDTO.email);
        contatos.save();

        return contatos;
    }
}