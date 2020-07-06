import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SectionHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 32px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.black.lightest};
    margin-right: 16px;
`;

export const PizzasContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 1fr);
    grid-gap: 32px;
    align-items: center;
    width: 100%;
    height: auto;
    background: ${({ theme }) => theme.colors.secondary.lightest};
    padding: 32px;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
