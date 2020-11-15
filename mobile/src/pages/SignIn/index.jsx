import React from 'react';

import {
    Input,
    Container,
    PasswordInput,
    PrimaryButton,
} from '../../components';

import Logo from '../../assets/logo.svg';

import { Header, Form } from './styles';

const SignIn = () => {

    return (
        <Container defaultPadding={false}>
            <Header>
                <Logo width={20} height={40} />
            </Header>
            <Form>
                <Input 
                    label="E-mail"
                />
                <PasswordInput />

                <PrimaryButton 
                    title="Comer muita pizza"
                />
            </Form>   
        </Container>
    );
};

export default SignIn;
