import React from 'react';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

import {
    HiddenCheckbox,
    StyledCheckbox,
    CheckboxContainer,
    Icon,
} from './styles';

const Checkbox = ({
    checked,
    name = 'checkbox',
    children,
    align = 'flex-start',
    ...props
}) => (
    <CheckboxContainer align={align}>
        <HiddenCheckbox
            checked={checked}
            name={name}
            {...props}
        />
        <StyledCheckbox 
            checked={checked}
        >
            <Icon icon={faCheck} />
        </StyledCheckbox>
        {children}
    </CheckboxContainer>
);

export default Checkbox;
