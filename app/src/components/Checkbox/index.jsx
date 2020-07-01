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
    value,
    onChange,
    name,
    children,
    align = 'flex-start',
}) => (
    <CheckboxContainer align={align}>
        <HiddenCheckbox
            value={value}
            onChange={({ target }) => onChange(target.value)}
            checked={checked}
            name={name}
        />
        <StyledCheckbox checked={checked}>
            <Icon icon={faCheck} />
        </StyledCheckbox>
        {children}
    </CheckboxContainer>
);

export default Checkbox;
