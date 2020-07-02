import styled from 'styled-components';

export const Container = styled.div`
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
