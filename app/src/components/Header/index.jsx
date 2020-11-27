import React, { useContext } from 'react';

import { Link, useHistory } from 'react-router-dom';

import AppContext from '../../AppContext';

import { signOut } from '../../services/establishments.service';

import LogoSVG from '../../assets/logo.svg';

import { StyledHeader, Logo, UserInformation, Avatar, StyledIcon } from './styles';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const { user, setUser } = useContext(AppContext); 

    const history = useHistory();

    const getUserInitials = () => {
        const firstInitial = user.name[0].toUpperCase();
        const lastInitial = user.name[1].toUpperCase();

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
                <Logo src={LogoSVG} alt="Appizza - Aplicativo para pizzarias" title="Appizza - A melhor pizza da região é a sua" />
            </Link>
            <UserInformation>
                <Avatar>
                    <span>
                        {getUserInitials()} 
                    </span>
                </Avatar>
                <label>
                    {user.name}
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
