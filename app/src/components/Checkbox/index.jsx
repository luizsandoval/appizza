import React from 'react';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

import {
    Label,
    Input,
    Icon,
    StyledCheckbox,
} from './styles';

const Checkbox = ({
    checked,
    id = 'checkbox',
    name = 'checkbox',
    margin = 0,
    children,
    ...props
}) => (
    <Label htmlFor={id}>
        <Input
            type="checkbox"
            id={id}
            name={name}
            margin={margin}
            checked={checked}
            {...props}
        />
        <StyledCheckbox 
            checked={checked}
            margin={margin}
        >
            <Icon icon={faCheck} />
        </StyledCheckbox>
        <span>
            {
                children
            }
        </span>
    </Label>
);

export default Checkbox;
