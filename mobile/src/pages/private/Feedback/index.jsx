import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import LottieView from 'lottie-react-native';

import styled from 'styled-components/native';

import {
    Title,
    SubTitle,
    Container,
    FloatingActionButton
} from '../../../components'

const AnimationWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const StyledContainer = styled(Container)`
    padding: 64px 32px 32px;
`;

const Feedback = () => {
    const navigation = useNavigation();

    const handleTrackMyOrder = useCallback(() => (
        navigation
            .navigate('Orders')
    ), [navigation]);

    return (
        <StyledContainer>
            <Title>
                Bom apetite
            </Title>
            <SubTitle>
                A melhor pizza da região {'\n'}
                já está a caminho {'\n'}
                da sua casa {':)'}
            </SubTitle>
            <AnimationWrapper>
                <LottieView 
                    loop
                    autoPlay
                    source={require('../../../assets/delivery.json')}
                />
            </AnimationWrapper>
            <FloatingActionButton 
                size="large"
                position="center"
                title="Acompanhar meu pedido"
                onPress={() => handleTrackMyOrder()}
            />
        </StyledContainer>
    );
};

export default Feedback;
