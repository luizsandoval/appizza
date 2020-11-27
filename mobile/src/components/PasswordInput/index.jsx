import React, { useState } from 'react';

import Input from '../Input';

const PasswordInput = ({ ...rest }) => (
    <Input 
        label="Senha"
        secureTextEntry
        {...rest}
    />
);

export default PasswordInput;