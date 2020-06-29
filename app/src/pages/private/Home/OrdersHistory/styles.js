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
    flex: 1;
    padding: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2, p {
        text-align: center;
        color: ${({ theme }) => theme.colors.black.lighten};
    }
`;

export const NoOrdersImageWrapper = styled.div`
    width: 400px;
    height: auto;
    padding: 32px;
`;

export const NoOrdersImage = styled.img`
    max-width: 100%;
    height: auto;
`;