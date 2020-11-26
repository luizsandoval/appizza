import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { getEstablishment } from '../../../store/thunks/establishments';

import { 
    Search,
    SubTitle,
    Container,
    ScrollList,
    FloatingActionButton,
} from '../../../components';

import { Header } from './styles';

const Establishment = ({ onGetEstablishment, route }) => {
    const { id } = route.params;

    useEffect(() => {
        onGetEstablishment(id);
    }, []);

    return (
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
}

const mapDispatchToProps = dispatch => (
    {
        onGetEstablishment: id => dispatch(getEstablishment(id)),
    }
);

export default connect(null, mapDispatchToProps)(Establishment);
