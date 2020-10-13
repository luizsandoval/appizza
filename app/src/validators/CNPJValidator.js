import { cnpj } from 'cpf-cnpj-validator';

const isValid = (value) => cnpj.isValid(value);

export default isValid;
