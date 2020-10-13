import { Response, Request } from 'express';
import { sign } from 'jsonwebtoken';

import { compare, getRounds } from 'bcrypt';

import knex from '../database/connection';

import { User, Establishment } from '../models';

import isPasswordValid from '../helpers/validatePassword';

class AuthController {
    async authenticateUsers(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
    
            const user = await knex<User>('users')
                .where('email', email)
                .first();
    
            if (!user || await isPasswordValid(password, user.password)) return res.status(403).json({ message: 'E-mail ou senha inválido(s)' });
    
            const token = sign(
                {
                    id: user.id,
                    name: user.name,
                    surname: user.surname,
                    address: user.address,
                    fullName: `${user.name} ${user.surname}`,
                    cpf: user.cpf,
                    email: user.email
                },
                process.env.SECRET_JWT || '',
                {
                    expiresIn: '12h'
                }
            );
    
            return res.status(200).json(token);

        } catch(err) {
            return res.status(500).json(err);
        }
    }

    async authenticateEstablishments(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
    
            const establishment = await knex<Establishment>('establishments')
                .where('email', email)
                .first();
    
            if (!establishment || await isPasswordValid(password, establishment.password)) return res.status(403).json({ message: 'E-mail ou senha inválido(s)' });
    
            const token = sign(
                {
                    id: establishment.id,
                    cnpj: establishment.cnpj,
                    email: establishment.email,
                    phone: establishment.phone,
                    whatsApp: establishment.whatsApp,
                    name: establishment.fantasy_name,
                    latitude: establishment.latitude,
                    longitude: establishment.longitude,
                    description: establishment.description,
                },
                process.env.SECRET_JWT || '',
                {
                    expiresIn: '12h'
                }
            );
    
            return res.status(200).json(token);

        } catch(err) {
            return res.status(500).json(err);
        }
    }

}

export default AuthController;