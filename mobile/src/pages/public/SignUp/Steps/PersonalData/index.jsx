import React from 'react';

import { View } from 'react-native';

import { useFormContext, Controller } from 'react-hook-form';

import {
    Title,
    Input,
} from '../../../../../components';

const PersonalData = () => {
    const { control, errors } = useFormContext();

    return (
        <>
            <Title>
                Dados pessoais
            </Title>
            <View>
                <Controller 
                    name="first_name"
                    defaultValue=""
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input 
                            required
                            autoFocus
                            label="Primeiro Nome"
                            value={value}
                            onBlur={onBlur}
                            invalid={errors.first_name}
                            hint={errors?.first_name?.message}
                            placeholder="Digite seu primeiro nome"
                            onChangeText={text => onChange(text)}
                        />
                    )}
                />
                <Controller 
                    name="last_name"
                    defaultValue=""
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input 
                            required
                            label="Último Nome"
                            value={value}
                            onBlur={onBlur}
                            invalid={errors.last_name}
                            hint={errors?.last_name?.message}
                            placeholder="Digite seu último nome"
                            onChangeText={text => onChange(text)}
                        />
                    )}
                />
                <Controller 
                    name="cpf"
                    defaultValue=""
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input 
                            required
                            label="CPF"
                            value={value}
                            onBlur={onBlur}
                            invalid={errors.cpf}
                            hint={errors?.cpf?.message}
                            placeholder="Digite seu CPF"
                            onChangeText={text => onChange(text)}
                        />
                    )}
                />
            </View>
        </>
    );
}

export default PersonalData;
