import React from 'react';

import { 
    Search,
    SubTitle,
    Container,
    ScrollList,
    FloatingActionButton,
} from '../../../components';

import { Header } from './styles';

const Establishment = () => (
    <Container>
        <Header>
            <SubTitle>
                Pizzaria do Zé
            </SubTitle>
        </Header>
        <Search />
        <ScrollList />
        <FloatingActionButton 
            size="large"
            position="center"
            title="Novo pedido"
        />
    </Container>
);

export default Establishment;
