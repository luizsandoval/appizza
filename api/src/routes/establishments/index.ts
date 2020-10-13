import { Router } from 'express';

import { EstablishmentsController } from '../../controllers';

import { 
    getEstablishmentValidator, 
    createEstablishmentValidator, 
    updateEstablishmentValidator, 
} from './validators';

const routes = Router();

const { create, update, show, index } = new EstablishmentsController();

routes
    .post(
        '/establishments',
        createEstablishmentValidator,
        create
    )
    .put(
        '/establishments',
        updateEstablishmentValidator,
        update,
    )
    .get(
        '/establishments',
        index
    )
    .get(
        '/establishments/:id',
        getEstablishmentValidator,
        show
    );

export default routes;
