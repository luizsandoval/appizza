import React, { useState, useCallback } from 'react';

import { View } from 'react-native';

import { connect } from 'react-redux';

import { signIn } from '../../../store/actions/auth';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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
                .required('O e-mail é obrigatório')
                .email('E-mail inválido'),
            password: yup
                .string()
                .required('A senha é obrigatória')
        }
    );

const SignIn = ({ onSignIn, navigation }) => {
    const [isLoading, setIsLoading] = useState(false);

    const { 
        errors,
        formState,
        control,
        getValues
    } = useForm(
        { 
            mode: 'onChange',
            resolver: yupResolver(SIGN_IN_SCHEMA),
        }
    );

    const isFormValid = () => formState.isValid;

    const handleLogin = useCallback(() => {
        const { email, password } = getValues();

        setIsLoading(true);

        onSignIn({ email, password });

    }, [getValues]);

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
                    <Controller 
                        name="email"
                        defaultValue=""
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <Input 
                                required
                                autoFocus
                                label="E-mail"
                                value={value}
                                onBlur={onBlur}
                                invalid={errors.email}
                                keyboardType="email-address"
                                hint={errors?.email?.message}
                                textContentType="emailAddress"
                                placeholder="batman@batcaverna.com"
                                onChangeText={text => onChange(text)}
                            />
                        )}
                    />

                    <Controller 
                        name="password"
                        defaultValue=""
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <PasswordInput
                                required
                                value={value}
                                onBlur={onBlur}
                                invalid={errors.password}
                                hint={errors?.password?.message}
                                onChangeText={text => onChange(text)}
                            />
                        )}
                    />

                </View>

                <PrimaryButton
                    isLoading={isLoading}
                    onPress={handleLogin}
                    disabled={!isFormValid()}
                    title="Comer muita pizza"
                />
            </Form>   
        </StyledContainer>
    );
};

const mapDispatchToProps = dispatch => (
    {
        onSignIn: user => dispatch(signIn(user)),
    }
);

export default connect(null,mapDispatchToProps)(SignIn);
