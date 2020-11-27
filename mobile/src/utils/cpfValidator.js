import { cpf } from 'cpf-cnpj-validator';

const isValid = (value) => cpf.isValid(value);

export default isValid;
