import React from 'react';

import { ActivityIndicator as Spinner } from 'react-native';

import styled from 'styled-components/native';

import { useTheme } from 'styled-components';

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Loader = () => {
    const theme = useTheme();

    return (
        <Container>
            <Spinner 
                size="large"
                color={theme.colors.primary.main}
            />
        </Container>
    );
}

export default Loader;