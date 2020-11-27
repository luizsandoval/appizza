import React, { 
    useState, 
    useEffect,
    useCallback 
} from 'react';

import { Alert, Dimensions,  } from 'react-native';

import { connect } from 'react-redux';

import { updateUser } from '../../../store/thunks/auth';

import LottieView from 'lottie-react-native';

import { Marker, UrlTile, PROVIDER_GOOGLE } from 'react-native-maps';

import { MAPBOX_TOKEN } from '@env';

import * as Location from 'expo-location';

import { 
    Title,
    SubTitle,
    Container,
    FloatingActionButton,
} from '../../../components';

import mapMarker from '../../../assets/map-marker.png';

import {
    Map,
    StyledContainer,
    AnimationWrapper,
} from './styles';

const INITIAL_REGION = {
    latitude: -23.533773,
    longitude: -46.625290,
    latitudeDelta: 0.014,
    longitudeDelta: 0.014,
};

const ConfirmLocation = ({ userId, onUpdateUser }) => {
    const [showMap, setShowMap] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [region, setRegion] = useState(INITIAL_REGION);

    const { width, height } = Dimensions.get('window');

    const handleMarkerDrag = useCallback(({ latitude, longitude }) => setRegion({ ...INITIAL_REGION, latitude, longitude }), [setRegion]);

    const handleConfirmLocation = useCallback(() => {
        const { latitude, longitude } = region;

        setIsLoading(true);

        onUpdateUser(
            {
                id: userId,
                latitude,
                longitude,
            }
        )
        .finally(() => setIsLoading(false));
    }, [onUpdateUser, region]);

    useEffect(() => {
        async function loadPosition() {
            const { status } = await Location.requestPermissionsAsync();

            if (status !== "granted") {
                Alert.alert("Ops!", "Permissão de acesso a localização negada.");
            }
        
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });

            setRegion({ ...INITIAL_REGION, latitude, longitude });
        }

        loadPosition();
    }, []);

    return (
        showMap
            ? (
                <Container defaultPadding={false}>
                    <Map
                        loadingEnabled
                        showsUserLocation
                        provider={PROVIDER_GOOGLE}
                        initialRegion={INITIAL_REGION}
                        region={region}
                        width={width}
                        height={height}
                    >
                        <UrlTile
                            urlTemplate={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_TOKEN}`}
                        />
                        <Marker
                            draggable
                            onDragEnd={(e) => handleMarkerDrag(e.nativeEvent.coordinate)}
                            image={mapMarker}
                            title="teste"
                            description="testesdasda"
                            coordinate={
                                {
                                    latitude: region.latitude,
                                    longitude: region.longitude,
                                }
                            }
                        />
                    </Map>
                    <FloatingActionButton
                        size="large"
                        position="center"
                        isLoading={isLoading}
                        title="Confirmar localização"
                        onPress={() => handleConfirmLocation()}
                    />
                </Container>
            )
            : (
                <StyledContainer>
                    <Title>
                        Confirme {'\n'}
                        sua localização
                    </Title>
                    <SubTitle>
                        Para uma melhor {'\n'}
                        experiência, confirme {'\n'} 
                        sua localização atual
                    </SubTitle>
                    <AnimationWrapper>
                        <LottieView 
                            loop
                            autoPlay
                            source={require('../../../assets/location.json')}
                        />
                    </AnimationWrapper>
                    <FloatingActionButton
                        size="large"
                        position="center"
                        title="Continuar"
                        onPress={() => setShowMap(true)}
                    />
                </StyledContainer>
            )
    );
}

const mapStateToProps = ({ auth: { user: { id } }}) => (
    {
        userId: id,
    }
);

const mapDispatchToProps = dispatch => (
    {
        onUpdateUser: user => dispatch(updateUser(user)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmLocation);
