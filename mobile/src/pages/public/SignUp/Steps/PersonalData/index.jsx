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
    Title,
    Input,
} from '../../../../../components';

import isValid from '../../../../../utils/cpfValidator';

const PERSONAL_DATA_SCHEMA = yup
    .object()
    .shape(
        {
            first_name: yup
                .string()
                .required('O primeiro nome é obrigatório'),
            last_name: yup
                .string()
                .required('O último nome é obrigatório'),
            cpf: yup
                .string()
                .required('O CPF é obrigatório')
                .test('valid', 'CPF Inválido', isValid),
        }
    );

const PersonalData = ({ user, setUser, setValidSteps }) => {
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
            resolver: yupResolver(PERSONAL_DATA_SCHEMA),
        }
    );

    const handleUpdateUser = useCallback(() => (
        setUser(user => (
            { 
                ...user, 
                ...getValues() 
            }
        ))
    ), [setUser, getValues]);

    useEffect(() => reset(user), [reset]);

    useEffect(() => {
        formState.isValid
            ? setValidSteps(steps => [...steps, 0])
            : setValidSteps(steps => steps.filter(step => step !== 0));
    }, [formState.isValid]);

    return (
        <>
            <Title>
                Dados pessoais
            </Title>
            <View>
                <Controller 
                    name="first_name"
                    defaultValue={user.first_name}
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input 
                            required
                            autoFocus
                            label="Primeiro Nome"
                            value={value}
                            onBlur={text => {
                                onBlur(text);
                                handleUpdateUser();
                            }}
                            invalid={errors.first_name}
                            hint={errors?.first_name?.message}
                            placeholder="Digite seu primeiro nome"
                            onChangeText={text => {
                                onChange(text);
                                handleUpdateUser();
                            }}
                        />
                    )}
                />
                <Controller 
                    name="last_name"
                    defaultValue={user.last_name}
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input 
                            required
                            label="Último Nome"
                            value={value}
                            onBlur={text => {
                                onBlur(text);
                                handleUpdateUser();
                            }}
                            invalid={errors.last_name}
                            hint={errors?.last_name?.message}
                            placeholder="Digite seu último nome"
                            onChangeText={text => {
                                onChange(text);
                                handleUpdateUser();
                            }}
                        />
                    )}
                />
                <Controller 
                    name="cpf"
                    defaultValue={user.cpf}
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input 
                            required
                            label="CPF"
                            value={value}
                            onBlur={text => {
                                onBlur(text);
                                handleUpdateUser();
                            }}
                            invalid={errors.cpf}
                            hint={errors?.cpf?.message}
                            placeholder="Digite seu CPF"
                            onChangeText={text => {
                                onChange(text);
                                handleUpdateUser();
                            }}
                        />
                    )}
                />
            </View>
        </>
    );
}

export default PersonalData;
