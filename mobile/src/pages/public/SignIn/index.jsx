import React, { useEffect, useCallback } from 'react';

import { View, Text } from 'react-native';

import { useForm, Controller } from 'react-hook-form';

import * as yup from 'yup';

import {
    Input,
    Title,
    BackButton,
    PasswordInput,
    PrimaryButton,
} from '../../../components';

import Logo from '../../../assets/logo.svg';

import { 
    Form,
    Header, 
    StyledContainer, 
} from './styles';

const SIGN_IN_SCHEMA = yup
    .object()
    .shape(
        {
            email: yup
                .string()
                .email('E-mail inválido')
                .required('O e-mail é obrigatório'),
            password: yup
                .string()
                .required('A senha é obrigatória'),
        }
    );

const SignIn = () => {
    const { 
        errors,
        formState,
        register,
        setValue,
        getValues
    } = useForm(
        { 
            mode: 'onChange', 
            validationSchema: SIGN_IN_SCHEMA 
        }
    );

    const setLoginForm = useCallback(() => {
        register({ name: 'email '});
        register({ name: 'password '});
    }, [register]);

    const handleLogin = useCallback(() => {
        const { email, password } = getValues();
        
        // handle login here...
    }, [getValues]);

    useEffect(() => {
        setLoginForm();
    }, [setLoginForm]);

    return (
        <StyledContainer defaultPadding={false}>
            <Header>
                <BackButton />
                <Logo width={100} height={200} />
            </Header>
            <Form>
                <Title>
                    Entre agora
                </Title>
                <View>
                    <Input 
                        required
                        autoFocus
                        label="E-mail"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        placeholder="batman@batcaverna.com"
                        onBlur={(text) => setValue('email', text)}
                    />
            
                    <PasswordInput
                        required
                        onBlur={(text) => setValue('password', text)}
                    />

                </View>

                <PrimaryButton
                    title="Comer muita pizza"
                    disabled={!formState.isValid}
                    onPress={handleLogin}
                />
            </Form>   
        </StyledContainer>
    );
};

export default SignIn;
