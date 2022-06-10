import {Router} from 'express'
import RecadosController from '../controllers/recados'

export default class RecadosRoutes {
    init (){
        const routes = Router ();
        const controller = new RecadosController();

        routes.get('/recados', controller.index);
        routes.post('/recados/', controller.store);

        return routes;
    }
}