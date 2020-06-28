import React from 'react';

import StyledPrimaryButton from './styles';

const PrimaryButton = ({ children, ...rest }) => <StyledPrimaryButton {...rest}>{children}</StyledPrimaryButton>;

export default PrimaryButton;
