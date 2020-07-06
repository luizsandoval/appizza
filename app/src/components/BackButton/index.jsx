import React from 'react';

import { useHistory } from 'react-router-dom';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { StyledBackButton, Icon } from './styles';

const BackButton = ({ customAction }) => {
    const history = useHistory();

    const handleBackHistory = () => history.goBack();

    return (
        <StyledBackButton 
            type="button" 
            onClick={() => (customAction 
                ? customAction() 
                : handleBackHistory()
            )}
        >
            <Icon icon={faArrowLeft} />
        </StyledBackButton>
    )
};

export default BackButton;
