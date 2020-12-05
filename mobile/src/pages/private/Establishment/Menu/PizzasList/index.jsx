import React, { useCallback } from 'react';

import { FlatList, TouchableOpacity } from 'react-native';

import FormatCurrency from '../../../../../components/FormatCurrency';

import {  
    Card,
    Name,
    Image,
    Details,
    Ingredients,
} from './styles';

const PizzasList = (
    { 
        pizzas,
        selectedPizzas,
        onPizzaSelected,
    }
) => {
    const isPizzaSelected = useCallback((pizza) => (
        selectedPizzas?.some(selectedPizza => selectedPizza.id === pizza.id)
    ), [selectedPizzas]);

    const renderPizza = useCallback(({ item }) => (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => onPizzaSelected(item)}
        >
            <Card
                isPizzaSelected={isPizzaSelected(item)}
            >
                <Details>
                    <Name>
                        {item.name}
                    </Name>
                    <Ingredients>
                        {item?.ingredients}
                    </Ingredients>
                    <FormatCurrency
                        value={item.price * (item.quantity || 1)}
                    />
                </Details>
                <Image 
                    source={{ uri: item.image }}
                /> 
            </Card>
        </TouchableOpacity>
    ) , [onPizzaSelected, isPizzaSelected]);

    return (    
        <FlatList
            data={pizzas}
            renderItem={renderPizza}
            extraData={selectedPizzas}
            keyExtractor={pizza => String(pizza.id)}
            contentContainerStyle={{ paddingBottom: 64 }}
        />
    );
};

export default PizzasList;
