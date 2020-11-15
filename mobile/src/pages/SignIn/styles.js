import styled from 'styled-components/native';

const PADDING = '16px';

export const Header = styled.View`
    flex: 1;
    padding: ${PADDING};
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.primary.lighest};
`;

export const Form = styled.View`
    flex: 2;
    padding: ${PADDING};
    border-radius: 25px 25px 0 0;
`;
