import { Response, Request } from 'express';
import { sign } from 'jsonwebtoken';

import { hash } from 'bcrypt';

import knex from '../database/connection';

import User from '../models/user.model';

class UsersController {
    async create(req: Request, res: Response) {
        try {
            const user: User = req.body;

            user.password = await hash(user.password, process.env.ROUNDS || ''); 

            const trx = await knex.transaction();
    
            const insertedUser = await trx<User>('users')
                .insert(user)

            await trx.commit();
    
            return res.status(200).json(insertedUser);

        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default UsersController;
