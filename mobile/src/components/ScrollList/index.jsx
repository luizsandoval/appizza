import React, { useCallback } from 'react';

import { ScrollView } from 'react-native';

import { useTheme } from 'styled-components';

import {
    Card,
    Label,
    Checkbox,
    Container,
    CardImage,
    CardTitle,
    CardDetails,
    CardSubTitle,
    CardImageOverlay,
    CheckboxBackground,
} from './styles';

const ScrollList = (
    { 
        items = [], 
        label = '',
        selectedItems = [],
        selectable = false,
        onItemPressed = null,
        onItemSelected = null,
    }
) => {
    const theme = useTheme();

    const isItemSelected = useCallback((item) => (
        selectedItems.some(selectedItem => selectedItem.id === item.id)
    ), [selectedItems]);

    return (
        <>
            {
                label
                    ? (
                        <Label>
                            {label}
                        </Label>
                    )
                    : null
            }
            <Container>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: 8, paddingBottom: 24, paddingHorizontal: 8 }}
                >
                    {
                        items?.map((item) => (
                            <Card
                                key={item?.id}
                                activeOpacity={1}
                                onPress={() => (
                                    selectable 
                                        ? onItemSelected(item) 
                                        : onItemPressed && onItemPressed(item)
                                )}
                            >
                                {
                                    selectable 
                                        ? (
                                            <>
                                                <CheckboxBackground />
                                                <Checkbox 
                                                    value={isItemSelected(item)} 
                                                    onValueChange={() => onItemSelected(item)}
                                                    tintColors={
                                                        { 
                                                            true: theme.colors.secondary.main, 
                                                            false: theme.colors.white 
                                                        }
                                                    }
                                                />
                                            </>
                                        )
                                        : null
                                }
    
                                <CardImage 
                                    source={{ uri: item?.image }}
                                >
                                    <CardImageOverlay />
                                </CardImage>
                                <CardDetails>
                                    <CardTitle>
                                        {item?.title}
                                    </CardTitle>
                                    <CardSubTitle>
                                        {item?.subtitle}
                                    </CardSubTitle>
                                </CardDetails>
                            </Card>
                        ))
                    }
                </ScrollView>
            </Container>
        </>
    );
}

export default ScrollList;
