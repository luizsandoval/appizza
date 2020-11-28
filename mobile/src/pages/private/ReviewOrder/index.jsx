import React, { useCallback } from 'react';

import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

import { itemQuantityDecreased, itemQuantityIncreased } from '../../../store/actions/cart';

import { 
    Container,
    FormatCurrency,
    FloatingActionButton,
} from '../../../components';

import { 
    Divider,
    ItemName,
    ItemCard,
    ItemDetails,
    StyledTitle,
    ItemQuantity,
    QuantityLabel,
    ItemsContainer,
    QuantityButton,
    ItemIngredients
} from './styles';

const ReviewOrder = (
    { 
        items, 
        onIncreaseItemQuantity, 
        onDecreaseItemQuantity,
    }
) => {
    const handleIncreaseItemQuantity = useCallback((item) => onIncreaseItemQuantity(item), [onIncreaseItemQuantity]);

    const handleDecreaseItemQuantity = useCallback((item) => onDecreaseItemQuantity(item), [onIncreaseItemQuantity]);

    return (
        <Container>
            <StyledTitle>
                Por favor,{'\n'}
                revise seu pedido
            </StyledTitle>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 64 }}
            >
                <ItemsContainer>
                    {
                        items
                            .map(item => (
                                <ItemCard
                                    key={item.id}
                                >
                                    <ItemDetails>
                                        <ItemName>
                                            {item.name}
                                        </ItemName>
                                        <ItemIngredients>
                                            {item?.ingredients}
                                        </ItemIngredients>
                                        <FormatCurrency
                                            value={item.price * item.quantity}
                                            renderText={() => <ItemName />}
                                        />
                                    </ItemDetails>
                                    <ItemQuantity>
                                        <QuantityButton
                                            disabled={item.quantity === 1}
                                            onPress={() => handleDecreaseItemQuantity(item)}
                                        >
                                            <Text>
                                                -
                                            </Text>
                                        </QuantityButton>
                                        <QuantityLabel>
                                            {item.quantity}
                                        </QuantityLabel>
                                        <QuantityButton
                                            onPress={() => handleIncreaseItemQuantity(item)}
                                        >
                                            <Text>
                                                +
                                            </Text>
                                        </QuantityButton>
                                    </ItemQuantity>
                                </ItemCard>
                            ))
                    }
                </ItemsContainer>
                <Divider />
            </ScrollView>
            <FloatingActionButton 
                size="large"
                position="center"
                title="Tudo certo, pode confirmar!"
            />
        </Container>
    );
};

const mapStateToProps = ({ cart: { items }}) => (
    {
        items,
    }
);

const mapDispatchToProps = dispatch => (
    {
        onIncreaseItemQuantity: item => dispatch(itemQuantityIncreased(item)),
        onDecreaseItemQuantity: item => dispatch(itemQuantityDecreased(item)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ReviewOrder);
