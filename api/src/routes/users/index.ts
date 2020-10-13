import { Router } from 'express';

import { UsersController } from '../../controllers';

import { createUserValidator } from './validators';

const routes = Router();

const { create } = new UsersController();

routes
    .post(
        '/users', 
        createUserValidator,
        create
    );

export default routes;
