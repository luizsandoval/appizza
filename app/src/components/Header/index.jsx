import React, { useContext } from 'react';

import AppContext from '../../AppContext';

import LogoSVG from '../../assets/logo.svg';

import { StyledHeader, Logo, UserInformation, Avatar, StyledIcon } from './styles';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const { user } = useContext(AppContext); 

    const getUserInitials = () => {
        const firstInitial = user.name[0].toUpperCase();
        const lastInitial = user.surname[0].toUpperCase();

        return `${firstInitial}${lastInitial}`;
    };

    return (
        <StyledHeader>
            <Logo src={LogoSVG} alt="Appizza - Aplicativo para pizzarias" />
            <UserInformation>
                <Avatar>
                    <span>
                        {getUserInitials()} 
                    </span>
                </Avatar>
                <label>
                    {user.fullName}
                </label>
                <span>
                    |
                </span>
                <span>
                    Sair
                    <StyledIcon icon={faSignOutAlt}/>
                </span>
            </UserInformation>
        </StyledHeader>
    )
};

export default Header;
