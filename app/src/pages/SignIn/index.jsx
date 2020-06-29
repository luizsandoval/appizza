import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import PrimaryButton from '../../components/PrimaryButton';
import DividerWithText from '../../components/DividerWithText';
import SecondaryButton from '../../components/SecondaryButton';
import PasswordInput from '../../components/PasswordInput';
import ErrorMessage from '../../components/ErrorMessage';

import { signIn, getUser } from '../../services/users.service';

import AppContext from '../../AppContext';

import { Container, FormContainer } from './styles';

const SignInSchema = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
    password: yup.string().required('A senha é obrigatória'),
});

const SignIn = () => {
    const { register, errors, formState, getValues } = useForm({ mode: 'onBlur', validationSchema: SignInSchema });

    const history = useHistory();

    const { setUser } = useContext(AppContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const { email, password } = getValues();

        signIn(email, password)
            .then(() => {
                const user = getUser();

                setUser(user);

                history.push('/');
            });
    };

    const isFormValid = () => formState.isValid;

    const goToSignUp = () => history.push('/signUp');

    return (
        <Container>
            <FormContainer>
                <form onSubmit={(e) => handleLogin(e)} noValidate>
                    <fieldset>
                        <label htmlFor="email">E-mail</label>
                        <input 
                            autoFocus 
                            required 
                            name="email" 
                            type="email"
                            ref={register}
                        />
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </fieldset>
                    <fieldset>
                        <PasswordInput forwardRef={register} />
                        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                    </fieldset>
                    <PrimaryButton type="submit" disabled={!isFormValid()}>
                        Comer muita pizza
                    </PrimaryButton>
                    <DividerWithText text="ou" />
                    <SecondaryButton type="button" onClick={() => goToSignUp()}>
                        Cadastrar-se
                    </SecondaryButton>
                </form>
            </FormContainer>
        </Container>
    )
};

export default SignIn;
