import React from 'react';

import { View } from 'react-native';

import { useFormContext, Controller } from 'react-hook-form';

import { 
    Input,
    Title,
    PasswordInput,
} from '../../../../../components';

const AccessData = () => {
    const { control, errors } = useFormContext();

    return (
        <>
            <Title>
                Dados de acesso
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
                            hint={errors?.email?.message}
                            placeholder="batman@batcaverna.com.br"
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
        </>
    );
}

export default AccessData;
