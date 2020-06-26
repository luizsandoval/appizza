import styled from 'styled-components';

const Divider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1px;
    background: ${({ theme }) => theme.colors.black.lightest};
    margin: 32px 0;

    span {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.black.lightest};
        padding: 0 16px;
    }
`;

export default Divider;
