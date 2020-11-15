import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { ButtonContainer, Icon } from './styles';

const BackButton = () => {
    const navigation = useNavigation();

    return (
        <ButtonContainer
            onPress={() => navigation.goBack()}
        >
            <Icon
                icon={faChevronLeft} 
            />
        </ButtonContainer>
    );
}

export default BackButton;