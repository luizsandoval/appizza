import React from 'react';

import { View } from 'react-native';

import LottieView from 'lottie-react-native';

import {
    SubTitle,
    Container,
    SecondaryButton,
} from '../../components';

import { 
    StyledTitle,
    AnimationWrapper,
    StyledPrimaryButton,
} from './styles';

const Welcome = () => (
    <Container>
        <StyledTitle>
            As melhores{'\n'}
            pizzas da região
        </StyledTitle>
        <SubTitle>
            A alguns cliques de você
        </SubTitle>
        <AnimationWrapper>
            <LottieView 
                loop
                autoPlay
                source={require('../../assets/chef.json')}
            />
        </AnimationWrapper>
        <StyledPrimaryButton
            title="Entrar"
        />
        <SecondaryButton
            title="Ainda não sou cadastrado"
        />
    </Container>
);

export default Welcome;