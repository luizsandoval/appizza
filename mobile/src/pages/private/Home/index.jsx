import React, { useEffect, useCallback } from 'react';

import { ScrollView } from 'react-native';

import { connect } from 'react-redux';

import {
    Search,
    Loader,
    SubTitle,
    Container,
    ScrollList,
} from '../../../components';

import calculateDistance from '../../../utils/calculateDistance';

import { getEstablishments } from '../../../store/thunks/establishments';

import ConfirmLocation from '../ConfirmLocation';

import Logo from '../../../assets/logo.svg';

import {
    Header,
    Content,
} from './styles';

const DEFAULT_ESTABLISHMENT_IMAGE = 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80';

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
    if (isFirstAccess) return <ConfirmLocation />;

    const handleOnItemPressed = useCallback(({ id }) => (
        navigation
            .navigate('Establishment', { id })
    ), [navigation]);

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

                <Search />

                <Content>
                    {
                        !establishments?.length && loading
                            ? (
                                <Loader />
                            ) 
                            : (
                                <ScrollList 
                                    label="Em destaque"
                                    onItemPressed={handleOnItemPressed}
                                    items={(
                                        establishments.map((
                                                { 
                                                    id, 
                                                    name,
                                                    latitude, 
                                                    longitude,
                                                    logo_image, 
                                                }
                                            ) => (
                                                {
                                                    id,
                                                    image: logo_image || DEFAULT_ESTABLISHMENT_IMAGE,
                                                    title: name,
                                                    subtitle: `A aproximadamente ${calculateDistance(userCoordinates, { latitude, longitude })} km de você`,
                                                }
                                            ))
                                    )}
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
