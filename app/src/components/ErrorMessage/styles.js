import styled from 'styled-components';

const ErrorMessage = styled.small`
    color: ${({ theme }) => theme.colors.danger.main};
    margin-top: 8px;
`;

export default ErrorMessage;
