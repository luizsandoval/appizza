import React, { 
    useState, 
    useEffect,
    useCallback 
} from 'react';

import { Alert, Dimensions,  } from 'react-native';

import { connect } from 'react-redux';

import { updateUser } from '../../../store/thunks/auth';

import LottieView from 'lottie-react-native';

import * as Location from 'expo-location';

import { 
    Map,
    Title,
    SubTitle,
    Container,
    FloatingActionButton,
} from '../../../components';

import {
    StyledContainer,
    AnimationWrapper,
} from './styles';

const ConfirmLocation = ({ userId, onUpdateUser, navigation }) => {
    const [showMap, setShowMap] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [region, setRegion] = useState();

    const { width, height } = Dimensions.get('window');

    const handleMarkerDrag = useCallback(({ latitude, longitude }) => setRegion(
        {
            latitude, 
            longitude,
            latitudeDelta: 0.014,
            longitudeDelta: 0.014, 
        }
    ), [setRegion]);

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
        .then(() => navigation.navigate('Main'))
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

            setRegion(
                { 
                    latitude,
                    longitude,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014, 
                }
            );
        }

        loadPosition();
    }, []);

    return (
        showMap
            ? (
                <Container defaultPadding={false}>
                    <Map
                        noMargin
                        width={width}
                        height={height}
                        region={region}
                        onMarkerDrag={handleMarkerDrag}
                    />
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

const mapStateToProps = (
    { 
        auth: { 
            user: { id } 
        }
    }
) => (
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
