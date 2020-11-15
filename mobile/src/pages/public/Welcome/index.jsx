import React from 'react';

import LottieView from 'lottie-react-native';

import {
    SubTitle,
    Container,
    SecondaryButton,
} from '../../../components';

import { 
    StyledTitle,
    AnimationWrapper,
    StyledPrimaryButton,
} from './styles';

const Welcome = ({ navigation }) => (
    <Container>
        <StyledTitle>
            As melhores{'\n'}
            pizzas da região
        </StyledTitle>
        <SubTitle>
            A poucos cliques de você
        </SubTitle>
        <AnimationWrapper>
            <LottieView 
                loop
                autoPlay
                source={require('../../../assets/chef.json')}
            />
        </AnimationWrapper>
        <StyledPrimaryButton
            title="Entrar"
            onPress={() => navigation.navigate('SignIn')}
        />
        <SecondaryButton
            title="Ainda não sou cadastrado"
            onPress={() => navigation.navigate('SignUp')}
        />
    </Container>
);

export default Welcome;