import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.secondary.lighten};
`;

export const FormContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.background};
    padding: 32px 16px;
    width: 100%;
    box-shadow: 0px 25px 25px ${({ theme }) => theme.colors.black.lightest};

    @media screen and (min-width: 992px) {
        max-width: 800px;
        margin: 32px 0;
        padding: 32px;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        width: 100%;
        margin-bottom: 32px;
    }

    form {
        width: 100%;

        h2 {
            border-bottom: 2px solid ${({ theme }) => theme.colors.black.lightest};
            padding-bottom: 16px;
            margin-bottom: 24px;

            &:not(:first-child) {
                margin-top: 40px;
            }
        }

        fieldset {
            display: flex;
            flex-direction: column;
            border: none;
            position: relative;
            margin-bottom: 16px;

            &.location {
                width: 100%;
                height: 400px;
                max-height: 400px;
                margin-bottom: 40px;
            }

            :last-of-type {
                margin-bottom: 32px;
            }

            label {
                margin-bottom: 8px;
                font-weight: normal;
                color: ${({ theme }) => theme.colors.black.lighten};

                small {
                    font-style: italic;
                    font-weight: bold;
                    color: ${({ theme }) => theme.colors.black.lightest};
                }
            }

            small.hint {
                font-size: 0.7em;
                margin-top: 8px;
                color: ${({ theme }) => theme.colors.black.lightest};
            }
        }
    }
`;
