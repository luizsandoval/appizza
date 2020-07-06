import styled from 'styled-components';
import { rgba } from 'polished';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DropZone = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 300px;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.black.lightest};

    p {
        text-align: center;
    }
`;

export const ImagePreview = styled.img`
    width: 100%;
    height: 100%; 
    object-fit: cover;
`;

export const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.black.light};
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${({ theme }) => rgba(theme.colors.black.main, 0.6)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        text-align: center;
        color: ${({ theme }) => theme.colors.white};
    }

    ${Icon} {
        color: ${({ theme }) => theme.colors.white};
    }

    p, ${Icon} {
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }
    }
`
