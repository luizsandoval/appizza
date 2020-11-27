import React from 'react';

import { StyledFooter, Copyright } from './styles';

const Footer = () => (
    <StyledFooter>
        <Copyright>
            Appizza - A melhor pizza da região é a sua
            &nbsp;
            <span
                role="img"
                aria-label="Uma fatia de pizza"
            >
                🍕
            </span> 
            <br />
            <br />
            Feito com
            &nbsp;
            <span 
                role="img"
                aria-label="Um coração vermelho, representando amor"
            >
                ❤️    
            </span>
            &nbsp;
            por
            &nbsp;
            <a 
                href="https://github.com/luizsandoval"
                aria-label="Meu repositório no GitHub"
                target="_blank"
                rel="noopener noreferrer"
            >
                Luiz Sandoval
            </a>
        </Copyright>
    </StyledFooter>
);

export default Footer;
