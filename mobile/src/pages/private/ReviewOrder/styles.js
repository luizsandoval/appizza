import styled, { css } from 'styled-components/native';

import Title from '../../../components/Title';

export const StyledTitle = styled(Title)`
    font-size: 24px;
    line-height: 32px;
`;

export const Label = styled.Text`
    font-size: 16px;
    font-weight: bold;
    ${({ noMargin }) => (
        noMargin
            ? ''
            : css`
                margin: 16px 0;
            `
    )};
    color: ${({ theme }) => theme.colors.black.main};
`;

export const TotalContainer = styled.View`
    padding: 8px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const AnimationWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
