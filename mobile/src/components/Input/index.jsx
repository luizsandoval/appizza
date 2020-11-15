import React from 'react';

import { Container, Label, TextInput } from './styles';

const Input = ({ 
    label, 
    placeholder, 
    required = false, 
    invalid = false, 
    ...rest
}) => (
    <Container>
        <Label invalid={invalid}>
            {label}
            {required && ' *'}
        </Label>
        <TextInput
            invalid={invalid}
            placeholder={placeholder}
            {...rest}
        />
    </Container>
);

export default Input;