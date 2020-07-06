import styled from 'styled-components';

import { ellipsis, rgba } from 'polished';

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 32px;
`;

export const OrderDate = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    h2 {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.black.lighten};
    }
`;

export const OrdersList = styled.div`
    display: grid;
    grid-gap: 32px;
    grid-row-gap: 32px;
    grid-template-columns: repeat(auto-fill, 1fr);
    padding: 32px 0;
    width: 100%;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    }
`;

export const Order = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    background-image: radial-gradient(circle at center, white 3px, transparent 4px), radial-gradient(circle at center, white 3px, transparent 4px);
    background-size: 14px 12px;
    background-position: center -6px, center calc(100% + 6px);
    background-repeat: repeat-x;
    background-color: ${({ theme }) => rgba(theme.colors.secondary.lightest, 0.1)};
`;

export const OrderHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div:first-child {
        display: flex;
        flex-direction: row;
        align-items: center;
        
        ${StyledIcon} {
            margin-right: 16px;
        }
    }

    label {
        font-weight: lighter;
        color: ${({ theme }) => theme.colors.black.lighten};
    }
`;

export const OrderContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    h3 {
        margin-bottom: 16px;
        color: ${({ theme }) => theme.colors.black.light};
    }
`;

export const OrderItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    margin: 16px 0;
`;

export const StackedText = styled.div`
    display: flex;
    flex-direction: column;

    small {
        margin-top: 8px;
        color: ${({ theme }) => theme.colors.black.lighten};
        ${ellipsis(200)}
    }

    h4 {
        font-weight: lighter;
    }
`;

export const OrderTotal = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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