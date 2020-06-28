import React from 'react';

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { signUp } from '../../services/users.service';

import isValid from '../../validators/CPFValidator';

import ErrorMessage from '../../components/ErrorMessage';
import PrimaryButton from '../../components/PrimaryButton';
import PasswordInput from '../../components/PasswordInput';
import SecondaryButton from '../../components/SecondaryButton';
import DividerWithText from '../../components/DividerWithText';

import { Container, FormContainer } from './styles';

const SignUpSchema = yup.object().shape({
    name: yup
        .string()
        .required('O nome é obrigatório'),
    surname: yup
        .string()
        .required('O sobrenome é obrigatório'),
    cpf: yup
        .string()
        .test('valid', 'CPF Inválido', isValid)
        .required('O CPF é obrigatório'),
    email: yup
        .string()
        .email('E-mail inválido')
        .required('O e-mail é obrigatório'),
    password: yup
        .string()
        .required('A senha é obrigatória'),
    address: yup
        .string()
        .required('O endereço é obrigatório'),
});

const SignUp = () => {
    const { register, errors, formState, getValues } = useForm({ mode: 'onBlur', validationSchema: SignUpSchema });

    const history = useHistory();

    const handleRegister = (e) => {
        e.preventDefault();

        const user = getValues();

        signUp(user)
            .then(() => goToSignIn());
    };

    const isFormValid = () => formState.isValid;

    const goToSignIn = () => history.push('/signIn');

    return (
        <Container>
            <FormContainer>
                <form onSubmit={(e) => handleRegister(e)} noValidate>
                    <fieldset>
                        <label htmlFor="name">Nome</label>
                        <input 
                            name="name" 
                            type="text"
                            ref={register}
                            required
                            autoFocus
                        />
                        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                    </fieldset>
                    <fieldset>
                        <label htmlFor="surname">Sobrenome</label>
                        <input 
                            name="surname" 
                            type="text"
                            ref={register}
                            required
                        />
                        {errors.surname && <ErrorMessage>{errors.surname.message}</ErrorMessage>}
                    </fieldset>
                    <fieldset>
                        <label htmlFor="cpf">CPF</label>
                        <input 
                            name="cpf" 
                            type="text" 
                            ref={register}
                            required
                        />
                        {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
                    </fieldset>
                    <fieldset>
                        <label htmlFor="address">Endereço</label>
                        <input 
                            name="address" 
                            type="text" 
                            ref={register}
                            required
                        />
                        {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">E-mail</label>
                        <input 
                            name="email" 
                            type="email" 
                            ref={register}
                            required 
                        />
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </fieldset>
                    <fieldset>
                        <PasswordInput forwardRef={register} />
                        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                    </fieldset>
                    <PrimaryButton type="submit" disabled={!isFormValid()}>
                        Cadastrar-se agora
                    </PrimaryButton>
                    <DividerWithText text="ou" />
                    <SecondaryButton type="button" onClick={() => goToSignIn()}>
                        Voltar para login
                    </SecondaryButton>
                </form>
            </FormContainer>
        </Container>
    )
};

export default SignUp;
