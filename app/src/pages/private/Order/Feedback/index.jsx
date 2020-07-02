import React from 'react';

import { useHistory } from 'react-router-dom';

import PrimaryButton from '../../../../components/PrimaryButton';

import OnTheWay from '../../../../assets/on-the-way.svg';

import { FeedbackContainer, StyledImage } from './styles';

const Feedback = () => {
    const history = useHistory();

    const goBackToHome = () => history.push('/');

    return (
        <>
            <FeedbackContainer>
                <h1>Hmmm...</h1>
                <StyledImage src={OnTheWay} alt="Uma mulher com a pele roxa está em uma moto vermelha com uma caixa de pizza na garupa" />
                <h2>
                    A melhor pizza da região já está a caminho da sua casa
                </h2>
            </FeedbackContainer>
            <PrimaryButton
                type="button"
                onClick={() => goBackToHome()}
            >
                Voltar para Início
            </PrimaryButton>
        </>
    )
};

export default Feedback;
