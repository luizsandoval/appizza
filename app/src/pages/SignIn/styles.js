import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.secondary.lightest};
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
    box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.25);

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

            input {
                border: 2px solid ${({ theme }) => theme.colors.secondary.light};
                padding: 16px;
                border-radius: 5px;
                width: 100%;
                background: ${({ theme }) => theme.colors.secondary.lightest};
            }
        }
    }
`;

export const IconButton = styled.button`
    position: absolute;
    right: 0;
    top: 60%;
    margin-right: 16px;
    border: none;
    background: transparent;
    cursor: pointer;

    color: ${({ theme }) => theme.colors.white};
`;