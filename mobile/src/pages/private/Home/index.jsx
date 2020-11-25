import React, { useEffect } from 'react';

import { View, ScrollView } from 'react-native';

import { connect } from 'react-redux';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
    Loader,
    SubTitle,
    Container,
    ScrollList,
} from '../../../components';

import { getEstablishments } from '../../../store/thunks/establishments';

import ConfirmLocation from '../ConfirmLocation';

import Logo from '../../../assets/logo.svg';

import { 
    Icon,
    Header, 
    SearchInput, 
    SearchContainer, 
} from './styles';

const Home = (
    { 
        loading,
        firstAccess,
        establishments, 
        onGetEstablishments, 
    }
) => {

    if (firstAccess) return <ConfirmLocation />;

    useEffect(() => {
        onGetEstablishments();
    }, []);
    
    return (
        <ScrollView
            contentContainerStyle={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <Container>
                <Header>
                    <SubTitle>
                        As melhores{'\n'}
                        pizzarias da região
                    </SubTitle>
                    <Logo width={50} height={100} />
                </Header>
                <SearchContainer>
                    <Icon icon={faSearch} />
                    <SearchInput 
                        placeholder="Pesquisar"                    
                    />
                </SearchContainer>
                <View style={{ flex: 1 }}>
                    {
                        loading
                            ? (
                                <Loader />
                            ) : (
                                <ScrollList 
                                    label="Em destaque"
                                    items={[
                                        {
                                            id: 1,
                                            title: 'Pizzaria do Zé',
                                            subtitle: 'A aproximadamente 3km de você',
                                            image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80'
                                        },
                                        {
                                            id: 2,
                                            title: 'Pizzaria do Zé',
                                            subtitle: 'A aproximadamente 3km de você',
                                            image: 'https://www.jornaldafronteira.com.br/wp-content/uploads/2019/07/5d11589e51f93-10.jpg'
                                        },
                                        {
                                            id: 3,
                                            title: 'Pizzaria do Zé',
                                            subtitle: 'A aproximadamente 3km de você',
                                            image: 'https://www.jornaldafronteira.com.br/wp-content/uploads/2019/07/5d11589e51f93-10.jpg'
                                        },
                                        {
                                            id: 4,
                                            title: 'Pizzaria do Zé',
                                            subtitle: 'A aproximadamente 3km de você',
                                            image: 'https://www.jornaldafronteira.com.br/wp-content/uploads/2019/07/5d11589e51f93-10.jpg'
                                        },
                                    ]}
                                />
                            )
                    }
                </View>
            </Container>
        </ScrollView>
    );
};

const mapStateToProps = (
    { 
        auth: { user }, 
        establishments: { 
            loading,
            establishments,
        }
    }
) => (
    {
        loading,
        establishments,
        firstAccess: user?.firstAccess,
    }
);

const mapDispatchToProps = dispatch => (
    {
        onGetEstablishments: () => dispatch(getEstablishments()),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
