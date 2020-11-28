import React from 'react';

import { useNavigation } from '@react-navigation/native';

import LottieView from 'lottie-react-native';

import {
    Title,
    SubTitle,
    Container,
    FloatingActionButton
} from '../../../components'

const Feedback = () => {
    const navigation = useNavigation();

    const handleTrackMyOrder = useCallback(() => (
        navigation
            .navigate('Orders')
    ), []);

    return (
        <Container>
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
                title="Acompanhar meu pedido"
                onPress={() => handleTrackMyOrder()}
            />
        </Container>
    );
};

export default Feedback;
