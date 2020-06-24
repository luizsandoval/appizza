import express from 'express';
import { celebrate, Joi } from 'celebrate';

const routes = express.Router();

import UsersController from './controllers/UsersController';
import PizzasController from './controllers/PizzasController';

const usersController = new UsersController();
const pizzasController = new PizzasController();

routes
    .post(
        '/users', 
        celebrate(
            {
                body: Joi.object().keys({
                    name: Joi.string().required(),
                    surname: Joi.string().required(),
                    email: Joi.string().required().email(),
                    password: Joi.string().required(),
                    cpf: Joi.string().required(),
                    address: Joi.string().required(),
                })
            },
            {
                abortEarly: false
            }
        ),
        usersController.create
    )

routes
    .get(
        '/pizzas', 
        pizzasController.index
    )
    .get(
        'pizzas/:id',
        pizzasController.show
    )

export default routes;
