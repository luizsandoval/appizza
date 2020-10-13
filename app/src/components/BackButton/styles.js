import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledBackButton = styled.button`
    border: none;
    background: ${({ theme }) => theme.colors.background};
    margin-right: 16px;

    span {
        margin-left: 16px;
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.black.lightest};
`;
