import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import { connect } from 'react-redux';

import styled from 'styled-components/native';

import { itemAdded, itemRemoved } from '../../../../store/actions/cart';

import { 
    Container,
    Search,
    ScrollList,
    FloatingActionButton,
} from '../../../../components';

const ContentContainer = styled(Container)`
    padding: 0 32px 32px;
`;

const Menu = (
    { 
        items,
        onItemAdded,
        onItemRemoved, 
        establishment, 
    }
) => {
    const navigation = useNavigation();
    const handleItemSelection = useCallback((item) => { 
        const isItemSelected = items.some(selectedItem => selectedItem.id === item.id);
        const originalItem = establishment
            .pizzas
            .find(pizza => pizza.id === item.id);

        originalItem.quantity = 1;

        isItemSelected
            ? onItemRemoved(originalItem)
            : onItemAdded(originalItem);
    }, [items, onItemRemoved, onItemAdded]);

    const handleNewOrder = useCallback(() => (
        navigation
            .navigate('ReviewOrder', { establishment_id: establishment?.id })
    ), [navigation, establishment]);

    return (
        <ContentContainer 
            defaultPadding={false}
        >
            <Search />
            <ScrollList
                selectable
                onItemSelected={handleItemSelection}
                items={(establishment?.pizzas?.map(({ id, name, price, image }) => (
                    {
                        id,
                        image,
                        title: name,
                        subtitle: price,
                    }
                )))}
                selectedItems={items}
            />
            {
                items.length 
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
        items,
    }
);

const mapDispatchToProps = dispatch => (
    {
        onItemAdded: item => dispatch(itemAdded(item)),
        onItemRemoved: item => dispatch(itemRemoved(item)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
