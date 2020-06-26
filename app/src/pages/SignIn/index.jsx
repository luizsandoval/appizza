import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PrimaryButton from '../../components/PrimaryButton';
import DividerWithText from '../../components/DividerWithText';
import SecondaryButton from '../../components/SecondaryButton';

import { signIn } from '../../services/users.service';

import { Container, FormContainer, IconButton } from './styles';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();

        signIn(email, password)
            .then(() => history.push('/home'));
    };

    const isFormValid = () => email && password;

    return (
        <Container>
            <FormContainer>
                <form onSubmit={(e) => handleLogin(e)} noValidate>
                    <fieldset>
                        <label htmlFor="email">E-mail</label>
                        <input 
                            name="email" 
                            type="email" 
                            required 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">Senha</label>
                        <input 
                            name="password" 
                            type="password" 
                            required 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <IconButton type="button">
                            <FontAwesomeIcon icon={faEye} />
                        </IconButton>
                    </fieldset>
                    <PrimaryButton type="submit" disabled={!isFormValid()}>
                        Comer muita pizza
                    </PrimaryButton>
                    <DividerWithText text="ou" />
                    <SecondaryButton type="button">
                        Cadastrar-se
                    </SecondaryButton>
                </form>
            </FormContainer>
        </Container>
    )
};

export default SignIn;
