import React from 'react';

import { Dimensions, Linking, ScrollView } from 'react-native';

import { connect } from 'react-redux';

import { 
    Marker, 
    PROVIDER_GOOGLE 
} from 'react-native-maps';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-native-fontawesome';

import calculateDistance from '../../../../utils/calculateDistance';

import { 
    Map, 
    Text, 
    Label, 
    StyledSecondaryButton 
} from './styles';

const DEFAULT_WHATSAPP_MESSAGE = 'Olá, acessei sua Pizzaria pelo Happizza e gostaria de pedir uma deliciosa Pizza :)'

const Details = ({ establishment, userCoordinates }) => {
    const { width, height } = Dimensions.get('window');

    const handleWhatsApp = () => Linking
        .openURL(`whatsapp://send?phone=${establishment.whatsApp}&text=${DEFAULT_WHATSAPP_MESSAGE}`);

    return (
        <ScrollView>
            {
                establishment.description
                    ? (
                        <>
                            <Label>
                                Sobre
                            </Label>
                            <Text>
                                {establishment?.description}
                            </Text>
                        </>
                    )
                    : null
            }
            <Label>
                Razão Social
            </Label>
            <Text>
                {establishment?.company_name}
            </Text>
            <Label>
                CNPJ
            </Label>
            <Text>
                {establishment?.cnpj}
            </Text>
            <Label>
                Localização
            </Label>
            <Text>
                A aproximadamente
                {' '}
                {calculateDistance(
                    userCoordinates, 
                    { 
                        latitude: establishment.latitude, 
                        longitude: establishment.longitude 
                    }
                )}
                {' '}km de você
            </Text>
            <Map 
                liteMode
                loadingEnabled
                showsUserLocation
                scrollEnabled={false}
                zoomEnabled={false}
                rotateEnabled={false}
                zoomControlEnabled={false}
                provider={PROVIDER_GOOGLE}
                initialRegion={{ 
                    latitude: Number(establishment?.latitude),
                    longitude: Number(establishment?.longitude),
                    latitudeDelta: 0.020,
                    longitudeDelta: 0.020,
                }}
                screenWidth={width}
                screenHeight={height}
            >
                <Marker
                    coordinate={
                        {
                            latitude: Number(establishment?.latitude),
                            longitude: Number(establishment?.longitude),
                        }
                    }
                />
            </Map>
            <StyledSecondaryButton
                title="Enviar WhatsApp"
                customColor="#25D366"
                onPress={handleWhatsApp}
                icon={() => <Icon icon={faWhatsapp} color="#25D366" size={24} />}
            />
            <StyledSecondaryButton
                title="Telefonar"
                customColor="#808080"
                icon={() => <Icon icon={faPhone} color="#808080" />}
            />
        </ScrollView>
    );
};

const mapStateToProps = ({ auth: { user }}) => (
    {
        userCoordinates: {
            latitude: user.latitude,
            longitude: user.longitude,
        }
    }
);

export default connect(mapStateToProps)(Details);
