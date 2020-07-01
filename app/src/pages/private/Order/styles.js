import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 64px;

    background: ${({ theme }) => theme.colors.secondary.lighten};
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    border-radius: 5px;
    height: auto;
    padding: 32px 64px;
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0px 25px 25px ${({ theme }) => theme.colors.black.lightest};

    h2 {
        font-weight: bold;
        text-align: left;
    }

    fieldset {
        margin: 16px 0;
    }
`;

export const PizzasContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 32px;
    padding: 32px 0;
`;

export const ReviewContainer = styled.div`
    padding: 32px 0;
    
    h3 {
        margin-bottom: 8px;
    }

    hr {
        margin: 16px 0;
    }

    span {
        b {
            margin-left: 8px;
        }
    }

`;

export const FormHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 32px;
`;

export const PizzaItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    margin: 24px 0;
    justify-content: space-between;
`;

export const PizzaDetails = styled.div`
    display: flex;
    flex-direction: column;

    small {
        color: ${({ theme }) => theme.colors.black.lighten};
    }
`;

export const TotalContainer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 32px;
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    color: ${({ theme }) => theme.colors.black.lightest};
    background: ${({ theme }) => theme.colors.black.lightest};
    margin: 24px 0;
`;

export const FeedbackContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    text-align: center;

    h2 {
        text-align: center;
        font-weight: lighter;
    }
`;

export const StyledImage = styled.img`
    width: 400px;
    height: auto;
    padding: 32px;
`;