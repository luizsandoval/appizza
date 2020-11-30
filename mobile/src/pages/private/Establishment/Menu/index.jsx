import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import { connect } from 'react-redux';

import styled from 'styled-components/native';

import { itemAdded, itemRemoved } from '../../../../store/actions/cart';

import { 
    Search,
    Container,
    FloatingActionButton,
} from '../../../../components';

import PizzasList from './PizzasList';

const ContentContainer = styled(Container)`
    padding: 0 32px 32px;
`;

const Menu = (
    { 
        onItemAdded,
        onItemRemoved,
        selectedItems,
        establishment, 
    }
) => {
    const navigation = useNavigation();

    const handlePizzaSelected = useCallback((pizza) => {
        const isItemSelected = selectedItems.some(selectedItem => selectedItem.id === pizza.id);

        isItemSelected
            ? onItemRemoved(pizza)
            : onItemAdded(pizza);
    }, [selectedItems, onItemAdded, onItemRemoved]);

    const handleNewOrder = useCallback(() => (
        navigation
            .navigate(
                'ReviewOrder', 
                { 
                    establishment_id: establishment.id, 
                }
            )
    ), [navigation, establishment]);
    
    return (
        <ContentContainer 
            defaultPadding={false}
        >
            <Search />

            <PizzasList 
                pizzas={establishment?.pizzas}
                selectedPizzas={selectedItems}
                onPizzaSelected={handlePizzaSelected}
            />

            {
                selectedItems.length 
                    ? (
                        <FloatingActionButton 
                            size="large"
                            position="center"
                            title="Novo pedido"
                            onPress={() => handleNewOrder()}
                        />
                    )
                    : null
            }
        </ContentContainer>
    );
};

const mapStateToProps = ({ cart: { items }}) => (
    {
        selectedItems: items,
    }
);

const mapDispatchToProps = dispatch => (
    {
        onItemAdded: item => dispatch(itemAdded(item)),
        onItemRemoved: item => dispatch(itemRemoved(item)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
