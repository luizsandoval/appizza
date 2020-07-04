import styled from 'styled-components';

export const PizzasContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 1fr);    
    grid-gap: 16px;
    padding: 16px 0;

    @media screen and (min-width: 768px) {
        grid-gap: 32px;
        grid-template-columns: repeat(2, minmax(200px, 1fr));    
    }
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
