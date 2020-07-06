import styled from 'styled-components';

export const FeedbackContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    text-align: center;

    h2 {
        text-align: center !important;
        font-weight: lighter !important;
    }
`;

export const StyledImage = styled.img`
    width: 100%;
    max-width: 100%;
    height: auto;
    padding: 32px;

    @media screen and (min-width: 768px) {
        width: 400px;
    }
`;
