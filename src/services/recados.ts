import { RecadosRepository } from '../database/repositories';
import { recadosDTO } from '../dto';

export class RecadosService {
    async find() {
        const repository = new RecadosRepository();
        const recados = await repository.find();

        return recados;
    }

    async create(recadosDTO: recadosDTO) {
        const repository = new RecadosRepository();
        const recados = await repository.create(recadosDTO);

        return recados;
    }
}