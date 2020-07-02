import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.secondary.lighten};
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.background};
    padding: 32px;
    min-width: 400px;
    box-shadow: 0px 25px 25px ${({ theme }) => theme.colors.black.lightest};

    form {
        width: 100%;
        fieldset {
            display: flex;
            flex-direction: column;
            border: none;
            position: relative;
            margin-bottom: 16px;

            :last-of-type {
                margin-bottom: 32px;
            }

            label {
                margin-bottom: 8px;
                font-weight: bold;
            }
        }
    }
`;

export const Logo = styled.img`
    height: 80px;
    width: auto;
    max-width: 100%;
    margin-bottom: 32px;
`;