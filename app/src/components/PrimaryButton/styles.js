import styled from 'styled-components';

const PrimaryButton = styled.button`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
    font-size: 1em;
    padding: 16px;

    &[disabled] {
        background: ${({ theme }) => theme.colors.primary.lighten};
        font-style: italic;
    }
`;

export default PrimaryButton;
