import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { ButtonContainer, Icon } from './styles';

const BackButton = ({ customAction }) => {
    const navigation = useNavigation();

    return (
        <ButtonContainer
            onPress={() => customAction ? customAction() : navigation.goBack()}
        >
            <Icon
                icon={faChevronLeft} 
            />
        </ButtonContainer>
    );
}

export default BackButton;
