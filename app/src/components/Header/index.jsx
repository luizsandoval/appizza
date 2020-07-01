import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

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
            <Link to="/">
                <Logo src={LogoSVG} alt="Appizza - Aplicativo para pizzarias" />
            </Link>
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
