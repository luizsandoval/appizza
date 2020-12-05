import React, { useCallback } from 'react';

import { FlatList, TouchableOpacity } from 'react-native';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { 
    Card,
    Icon,
    Title,
    Badge,
    Column,
    SubTitle,
    BadgeText,
} from './styles';

const OrdersList = ({ orders, onOrderPressed  }) => {
    const renderOrder = useCallback(({ item }) => (
        <TouchableOpacity
            onPress={() => onOrderPressed(item)}
        >
            <Card>
                <Column>
                    <Title>
                        {item.company_name}
                    </Title>

                    {
                        item.pizzas
                            .map(pizza => (
                                <SubTitle
                                    key={String(pizza.id)}
                                >
                                    {pizza.quantity}{' '}{pizza.name}
                                </SubTitle>
                            ))
                    }
                </Column>
                <Column>
                    <Icon icon={faChevronRight} />
                    <Badge
                        isFinished={item.finished}
                    >
                        <BadgeText>
                            {
                                !item.finished
                                    ? 'Em andamento'
                                    : 'Finalizado'
                            }
                        </BadgeText>
                    </Badge>
                </Column>
            </Card>
        </TouchableOpacity>
    ), []);

    return (
        <FlatList
            data={orders}
            style={{ flex: 1 }}
            renderItem={renderOrder}
            keyExtractor={order => String(order.id)}
        />
    )
};

export default OrdersList;
