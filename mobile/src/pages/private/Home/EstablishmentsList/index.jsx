import React from 'react';

import { ScrollView } from 'react-native';

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import calculateDistance from '../../../../utils/calculateDistance';

import {
    Card,
    Text,
    Icon,
    Label,
    Container,
    CardImage,
    CardTitle,
    CardFooter,
    CardDetails,
} from './styles';

const DEFAULT_ESTABLISHMENT_IMAGE = 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80';

const EstablishmentsList = (
    { 
        label,
        establishments, 
        userCoordinates,
        onItemPressed = null,
    }
) => (
    <Container>
        <Label>
            {label}
        </Label>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 8, paddingBottom: 24, paddingHorizontal: 4 }}
        >
            {
                establishments.map((establishment) => (
                    <Card
                        activeOpacity={0.8}
                        key={establishment?.id}
                        onPress={() => (onItemPressed && onItemPressed(establishment))}
                    >
                        <CardImage 
                            source={{ uri: establishment?.image || DEFAULT_ESTABLISHMENT_IMAGE }}
                        />
                        <CardDetails>
                            <CardTitle>
                                {establishment?.name}
                            </CardTitle>
                            <CardFooter>
                                <Icon icon={faMapMarkerAlt} />
                                <Text>
                                    {
                                        calculateDistance(
                                            userCoordinates, 
                                            { 
                                                latitude: establishment.latitude, 
                                                longitude: establishment.longitude 
                                            }
                                        )
                                    } km distante
                                </Text>
                            </CardFooter>
                        </CardDetails>
                    </Card>
                ))
            }
        </ScrollView>
    </Container>
);

export default EstablishmentsList;
