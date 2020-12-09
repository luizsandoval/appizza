import React, { useCallback } from 'react';

import { TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { signOut } from '../../../store/thunks/auth';

import { faChevronRight, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import { 
    Text,
    Divider, 
    Title, 
} from '../../../components';

import {
    Icon,
    Header,
    Option,
    Content,
    StyledContainer,
} from './styles';

import Logo from '../../../assets/logo.svg';

const Profile = (
    { 
        onSignOut,
        navigation, 
        user_first_name, 
    }
) => {
    const handleSignOut = useCallback(() => onSignOut(), [onSignOut]);

    const handleEditProfile = useCallback(() => navigation.navigate('EditProfile'), [navigation]);
    
    const handleUpdateLocation = useCallback(() => navigation.navigate('ConfirmLocation'), [navigation]);

    return (
        <StyledContainer defaultPadding={false}>
            <Header>
                <Logo width={100} height={200} />
            </Header>
            <Content>
                <Title>
                    Olá, {user_first_name}
                </Title>

                <TouchableOpacity
                    onPress={() => handleEditProfile()}
                >
                    <Option>
                        <Text>
                            Editar perfil
                        </Text>
                        <Icon icon={faChevronRight} />
                    </Option>
                </TouchableOpacity>
    
                <TouchableOpacity
                    onPress={() => handleUpdateLocation()}
                >
                    <Option>
                        <Text>
                            Atualizar minha localização
                        </Text>
                        <Icon icon={faChevronRight} />
                    </Option>
                </TouchableOpacity>
    
                <Divider />
    
                <TouchableOpacity
                    onPress={() => handleSignOut()}
                >
                    <Option>
                        <Text>
                            Sair
                        </Text>
                        <Icon icon={faPowerOff} color="red" />
                    </Option>
                </TouchableOpacity>
            </Content>
        </StyledContainer>
    );
};

const mapStateToProps = ({ auth: { user: { first_name }}}) => (
    {
        user_first_name: first_name,
    }
);

const mapDispatchToProps = dispatch => (
    {
        onSignOut: () => dispatch(signOut()),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
