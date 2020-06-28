import React, { useState } from 'react';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PasswordContainer, IconButton } from './styles';

const PasswordInput = ({ forwardRef }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
        <PasswordContainer>
            <label htmlFor="password">Senha</label>
            <input 
                name="password"
                ref={forwardRef}
                type={(!showPassword
                    ? 'password'
                    : 'text')
                }
                required
            />
            <IconButton 
                type="button" 
                onClick={handleShowPassword}
            >
                {
                    showPassword
                        ? <FontAwesomeIcon icon={faEyeSlash} />
                        : <FontAwesomeIcon icon={faEye} />
                }
            </IconButton>
        </PasswordContainer>
    )
};

export default PasswordInput;
