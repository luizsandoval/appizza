import React, { useContext } from 'react';

import { Link, useHistory } from 'react-router-dom';

import AppContext from '../../AppContext';

import { signOut } from '../../services/users.service';

import LogoSVG from '../../assets/logo.svg';

import { StyledHeader, Logo, UserInformation, Avatar, StyledIcon } from './styles';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const { user, setUser } = useContext(AppContext); 

    const history = useHistory();

    const getUserInitials = () => {
        const firstInitial = user.name[0].toUpperCase();
        const lastInitial = user.surname[0].toUpperCase();

        return `${firstInitial}${lastInitial}`;
    };

    const handleSignOut = () => {
        signOut();
        setUser({});
        history.push('/signIn');
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
                <span onClick={() => handleSignOut()}>
                    Sair
                    <StyledIcon icon={faSignOutAlt}/>
                </span>
            </UserInformation>
        </StyledHeader>
    )
};

export default Header;
