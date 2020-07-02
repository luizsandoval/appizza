import styled from 'styled-components';

export const PizzasContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 32px;
    padding: 32px 0;
`;

export const FormHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 32px;
`;

export const Fieldset = styled.fieldset`
    margin: 16px 0;
`;
