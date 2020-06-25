import { Request, Response } from 'express';

import knex from '../database/connection';

interface CreateOrderRequest {
    user_id: number;
    pizza_ids: number[]; 
    total: number;
}

class OrdersController {
    async create(req: Request, res: Response) {
        try {
            const { user_id, pizza_ids, total }: CreateOrderRequest = req.body;                
        
            const trx = await knex.transaction();
    
            const order = {
                user_id,
                total,
            };

            const insertedOrder = await knex('orders')
                .insert(order);

            const order_id = insertedOrder[0];

            const ordersPizzas = pizza_ids
                .map(pizza_id => (
                    {
                        pizza_id,
                        order_id
                    }
                ));

            await trx('orders_pizzas')
                .insert(ordersPizzas);

            await trx.commit();
    
            return res.status(200).json(
                {
                    id: order_id,
                    ...order
                }
            );

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async index(req: Request, res: Response) {
        try {
            const orders = await knex('orders')
                .join('orders_pizzas', 'orders.id', '=', 'orders_pizza.order_id')
                .select([''])
                .join('users', 'orders.user_id', '=', 'users.id')
                .select('user.name', 'user.surname')
                
            return res.status(200).json(orders);

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async show(req: Request, res: Response) {
        try {
            const order = await knex('orders')
                .join('orders_pizzas', 'orders.id', '=', 'orders_pizza.order_id')
                .select([''])
                .join('users', 'orders.user_id', '=', 'users.id')
                .select('user.name', 'user.surname')
                
            return res.status(200).json(order);

        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default OrdersController;
