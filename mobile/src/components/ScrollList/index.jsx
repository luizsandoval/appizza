import React from 'react';

import { ScrollView } from 'react-native';

import {
    Card,
    Label,
    Container,
    CardImage,
    CardTitle,
    CardDetails,
    CardSubTitle,
} from './styles';

const ScrollList = ({ items, label = '', onItemPressed = null }) => (
    <>
        <Label>
            {label}
        </Label>
        <Container>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={{ paddingVertical: 8, paddingBottom: 24, paddingHorizontal: 8 }}
            >
                {
                    items.map((item) => (
                        <Card
                            key={item.id}
                            onPress={() => onItemPressed && onItemPressed(item)}
                        >
                            <CardImage 
                                source={{ uri: item.image }}
                            />
                            <CardDetails>
                                <CardTitle>
                                    {item.title}
                                </CardTitle>
                                <CardSubTitle>
                                    {item.subtitle}
                                </CardSubTitle>
                            </CardDetails>
                        </Card>
                    ))
                }
            </ScrollView>
        </Container>
    </>
);

export default ScrollList;
