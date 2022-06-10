import { RecadosEntity } from '../entities';
import { recadosDTO } from '../../dto';

export class RecadosRepository {
    async find() {
        const recados = await RecadosEntity.find();

        return recados;
    }

    async create(recadosDTO: recadosDTO) {
        const recados = await new RecadosEntity(recadosDTO.nome, recadosDTO.recado);
        recados.save();

        return recados;
    }
}