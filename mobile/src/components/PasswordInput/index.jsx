import React, { useState } from 'react';

import Input from '../Input';

const PasswordInput = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
        <Input 
            label="Senha"
            secureTextEntry={showPassword}
        />
    );
}

export default PasswordInput;