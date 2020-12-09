import React, { useEffect, useCallback } from 'react';

import { ScrollView } from 'react-native';

import { connect } from 'react-redux';

import {
    Search,
    Loader,
    SubTitle,
    Container,
} from '../../../components';


import { getEstablishments } from '../../../store/thunks/establishments';

import Logo from '../../../assets/logo.svg';

import EstablishmentsList from './EstablishmentsList';

import {
    Header,
    Content,
} from './styles';

const Home = (
    { 
        loading,
        navigation,
        isFirstAccess,
        establishments,
        userCoordinates,
        onGetEstablishments, 
    }
) => {
    const handleOnItemPressed = useCallback(({ id }) => (
        navigation
            .navigate('Establishment', { id })
    ), [navigation]);

    useEffect(() => {
        isFirstAccess
            ? navigation.navigate('ConfirmLocation')
            : onGetEstablishments(); 
    }, [isFirstAccess]);

    if (isFirstAccess) return null;
    
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

                <Search />

                <Content>
                    {
                        !establishments?.length && loading
                            ? (
                                <Loader />
                            ) 
                            : (
                                <EstablishmentsList 
                                    label="Em destaque"
                                    establishments={establishments}
                                    userCoordinates={userCoordinates}
                                    onItemPressed={handleOnItemPressed}
                                />
                            )
                    }
                </Content>
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
        isFirstAccess: user?.firstAccess,
        userCoordinates: { 
            latitude: user?.latitude, 
            longitude: user?.longitude 
        },
    }
);

const mapDispatchToProps = dispatch => (
    {
        onGetEstablishments: () => dispatch(getEstablishments()),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
