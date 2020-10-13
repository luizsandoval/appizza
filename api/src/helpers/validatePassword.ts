import { compare } from 'bcrypt';

const validatePassword = async (password: string, hash: string) => await compare(password, hash);

export default validatePassword;
