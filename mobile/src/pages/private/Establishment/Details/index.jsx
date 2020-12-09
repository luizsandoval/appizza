import React, { useCallback } from 'react';

import { Dimensions, Linking, ScrollView } from 'react-native';

import { connect } from 'react-redux';

import styled from 'styled-components/native';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-native-fontawesome';

import calculateDistance from '../../../../utils/calculateDistance';

import { 
    Map, 
    Text, 
    Label,
    SecondaryButton,
} from '../../../../components';

const Content = styled.View`
    margin: 16px 32px;
`;

const DEFAULT_WHATSAPP_MESSAGE = 'Olá, encontrei sua Pizzaria pelo Happizza e gostaria de pedir uma deliciosa Pizza :)'

const Details = ({ establishment, userCoordinates }) => {
    const { width, height } = Dimensions.get('window');

    const handleWhatsApp = useCallback(() => (
        Linking
            .openURL(`whatsapp://send?phone=${establishment.whatsApp}&text=${DEFAULT_WHATSAPP_MESSAGE}`)
    ), [Linking, establishment]);

    const handlePhoneCall = useCallback(() => (
        Linking
            .openURL(`tel:${establishment.phone}`)
    ), [Linking, establishment]);

    return (
        <ScrollView>
            <Content>
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
            </Content>

            <Content>
                <Label>
                    Razão Social
                </Label>
                <Text>
                    {establishment?.company_name}
                </Text>
            </Content>

            <Content>
                <Label>
                    CNPJ
                </Label>
                <Text>
                    {establishment?.cnpj}
                </Text>
            </Content>

            <Content>
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
                    {' '}de você
                </Text>
            </Content>

            <Map 
                liteMode
                width={width}
                height={height / 3}
                region={{ 
                    latitudeDelta: 0.020,
                    longitudeDelta: 0.020,
                    latitude: Number(establishment?.latitude),
                    longitude: Number(establishment?.longitude),
                }}
            />

            <Content>
                <SecondaryButton
                    title="Enviar WhatsApp"
                    customColor="#25D366"
                    onPress={handleWhatsApp}
                    icon={() => <Icon icon={faWhatsapp} color="#25D366" size={24} />}
                />
            </Content>

            <Content>
                <SecondaryButton
                    title="Telefonar"
                    customColor="#808080"
                    onPress={handlePhoneCall}
                    icon={() => <Icon icon={faPhone} color="#808080" />}
                />
            </Content>
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
