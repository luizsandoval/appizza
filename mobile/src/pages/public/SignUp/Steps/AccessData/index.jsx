import React,
{
    useCallback,
    useEffect,
} from 'react';

import { View } from 'react-native';

import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import { 
    Input,
    Title,
    PasswordInput,
} from '../../../../../components';

const ACCESS_DATA_SCHEMA = yup
    .object()
    .shape(
        {
            email: yup
                .string()
                .required('O e-mail é obrigatório')
                .email('E-mail inválido'),
            password: yup
                .string()
                .required('A senha é obrigatória'),
        }
    );

const AccessData = ({ user, setUser, setValidSteps }) => {
    const { 
        reset,
        errors,
        control,
        formState, 
        getValues,
    } = useForm(
        {
            mode: 'onChange',
            defaultValues: user,
            resolver: yupResolver(ACCESS_DATA_SCHEMA),
        }
    );

    const handleUpdateUser = useCallback(() => setUser(user => ({ ...user, ...getValues() })), [setUser, getValues]);

    useEffect(() => reset(user), []);

    useEffect(() => {
        formState.isValid
            ? setValidSteps(steps => [...steps, 1])
            : setValidSteps(steps => steps.filter(step => step !== 1));
    }, [formState.isValid]);

    return (
        <>
            <Title>
                Dados de acesso
            </Title>
            <View>
                <Controller 
                    name="email"
                    defaultValue={user.email}
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input 
                            required
                            autoFocus
                            label="E-mail"
                            value={value}
                            onBlur={text => {
                                onBlur(text);
                                handleUpdateUser();
                            }}
                            onChangeText={text => {
                                onChange(text);
                                handleUpdateUser();
                            }}
                            invalid={errors.email}
                            hint={errors?.email?.message}
                            placeholder="batman@batcaverna.com.br"
                        />
                    )}
                />
                <Controller 
                    name="password"
                    defaultValue={user.password}
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <PasswordInput
                            required
                            value={value}
                            onBlur={text => {
                                onBlur(text);
                                handleUpdateUser();
                            }}
                            onChangeText={text => {
                                onChange(text);
                                handleUpdateUser();
                            }}
                            invalid={errors.password}
                            hint={errors?.password?.message}
                        />
                    )}
                />
            </View>
        </>
    );
}

export default AccessData;
