import React from 'react';

import { Label, TextInput } from './styles';

const Input = ({ label, placeholder, required, ...rest }) => (
    <>
        <Label>
            {label}
            {required && '*'}
        </Label>
        <TextInput
            placeholder={placeholder}
            {...rest}
        />
    </>
);

export default Input;