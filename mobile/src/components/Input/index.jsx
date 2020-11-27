import React from 'react';

import { 
    Hint,
    Label,
    Container, 
    TextInput,
} from './styles';

const Input = ({ 
    label, 
    placeholder, 
    hint = '',
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
        {
            hint
                ? (
                    <Hint invalid={invalid}>
                        {hint}
                    </Hint>
                )
                : null
        }

    </Container>
);

export default Input;