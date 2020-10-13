import { celebrate, Joi } from 'celebrate';

import { Establishment } from '../../../models';

export default celebrate(
    {
        params: {
            id: Joi.number().positive().required(),
        }
    },
    {
        abortEarly: false
    }
);
