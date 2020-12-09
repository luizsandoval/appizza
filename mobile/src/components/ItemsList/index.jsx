import React, { useCallback } from 'react';

import { Text, FlatList } from 'react-native';

import FormatCurrency from '../FormatCurrency';

import {  
    ItemCard,
    ItemName,
    ItemDetails,
    ItemQuantity,
    QuantityLabel,
    QuantityButton,
    ItemIngredients,
} from './styles';

const ItemsList = (
    { 
        items = [],
        viewOnly = false,
        onIncreaseItemQuantity = null,
        onDecreaseItemQuantity = null,
    }
) => {
    const renderItem = useCallback(({ item }) => (
        (
            <ItemCard>
                <ItemDetails>
                    <ItemName>
                        {item.name}
                    </ItemName>
                    <ItemIngredients>
                        {item?.ingredients}
                    </ItemIngredients>
                    <FormatCurrency
                        value={item.price * (item.quantity || 1)}
                    />
                </ItemDetails>
                <ItemQuantity>
                    {
                        viewOnly
                            ? (
                                <QuantityLabel>
                                    {item.quantity}
                                </QuantityLabel>
                            )
                            : (
                                <> 
                                    <QuantityButton
                                        disabled={!item?.quantity}
                                        onPress={() => onDecreaseItemQuantity(item)}
                                    >
                                        <Text>
                                            -
                                        </Text>
                                    </QuantityButton>
                                    <QuantityLabel>
                                        {item.quantity || 0}
                                    </QuantityLabel>
                                    <QuantityButton
                                        onPress={() => onIncreaseItemQuantity(item)}
                                    >
                                        <Text>
                                            +
                                        </Text>
                                    </QuantityButton>
                                </>
                            )
                    }
                </ItemQuantity>
            </ItemCard>
        )
    ), []);

    return (
        <FlatList 
            data={items}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 8 }}
            keyExtractor={item => String(item.id)}
        />
    )
};

export default ItemsList;
