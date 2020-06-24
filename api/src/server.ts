import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { errors } from 'celebrate';

import Routes from './routes'; 

const dotenv = config();

if (dotenv.error) throw new Error('Error while configuring dotenv');
 
const PORT = 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);
app.use(errors());

app.listen(PORT, () => console.log(`Server is listening on PORT ${process.env.PORT}`));
