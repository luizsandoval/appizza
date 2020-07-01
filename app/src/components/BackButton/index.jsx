import React from 'react';

import { useHistory } from 'react-router-dom';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { StyledBackButton, Icon } from './styles';

const BackButton = () => {
    const history = useHistory();

    const handleBackHistory = () => history.goBack();

    return (
        <StyledBackButton 
            type="button" 
            onClick={() => handleBackHistory()}
        >
            <Icon icon={faArrowLeft} />
        </StyledBackButton>
    )
};

export default BackButton;
