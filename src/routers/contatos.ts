import {Router} from 'express'
import ContatosController from '../controllers/contatos'

export default class ContatosRoutes {
    init (){
        const routes = Router ();
        const controller = new ContatosController();

        routes.get('/contatos', controller.index);
        routes.post('/contatos', controller.store);

        return routes;
    }
}