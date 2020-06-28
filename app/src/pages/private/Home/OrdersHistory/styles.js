import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SectionHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 64px 32px 32px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.black.lightest};
    margin-right: 16px;
`;

export const OrdersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 32px;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 32px;
`;

export const NoOrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NoOrdersImageWrapper = styled.div`
    max-width: 500px;
    padding: 32px;
`;

export const NoOrdersImage = styled.img`
    max-width: 100%;
    height: auto;
`;