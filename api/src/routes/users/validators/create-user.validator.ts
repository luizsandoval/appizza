import { celebrate, Joi } from 'celebrate';

import CPFValidator from '../../../helpers/CPFValidator';

export default celebrate(
    {
        body: Joi.object()
            .keys(
                {
                    name: Joi
                        .string()
                        .required(),
                    surname: Joi
                        .string()
                        .required(),
                    email: Joi
                        .string()
                        .required()
                        .email(),
                    password: Joi
                        .string()
                        .required(),
                    cpf: Joi
                        .string()
                        .required()
                        .custom(CPFValidator),
                    address: Joi
                        .string()
                        .required(),
                }
            )
    },
    {
        abortEarly: false
    }
);
