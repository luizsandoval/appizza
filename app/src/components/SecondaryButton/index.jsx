import React from 'react';

import StyledSecondaryButton from './styles';

const SecondaryButton = ({ children, ...rest }) => <StyledSecondaryButton {...rest}>{children}</StyledSecondaryButton>;

export default SecondaryButton;
