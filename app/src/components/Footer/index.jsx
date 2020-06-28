import React from 'react';

import { StyledFooter, Copyright } from './styles';

const Footer = () => (
    <StyledFooter>
        <Copyright>
            Appizza - Aplicativo para pizzarias. 
            <br />
            <br />
            Copyright &copy; { new Date().getFullYear() }
        </Copyright>
    </StyledFooter>
);

export default Footer;
