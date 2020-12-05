import React, { useCallback, useEffect } from 'react';

import { Dimensions, ScrollView } from 'react-native';

import { connect } from 'react-redux';

import { getOrder, updateOrder } from '../../../../store/thunks/orders';

import { 
    Map,
    Text,
    Label,
    Loader,
    Divider,
    Container,
    ItemsList,
    PrimaryButton,
    FormatCurrency,
} from '../../../../components';

import calculateDistance from '../../../../utils/calculateDistance';

import { Content, TotalContainer } from './styles';

const OrderDetails = (
    { 
        order, 
        route, 
        loading, 
        onGetOrder,
        onOrderUpdated,
    }
) => {
    const { id } = route.params;
    const { width, height } = Dimensions.get('window'); 

    const handleOrderFinished = useCallback(() => {
        const orderToBeSaved = {
            ...order,
            finished: true
        };

        onOrderUpdated(orderToBeSaved);
    }, [order, onOrderUpdated]);

    useEffect(() => {
        onGetOrder(id);
    }, [onGetOrder]);

    return (
        <Container defaultPadding={false}>
            {
                loading 
                    ? <Loader />
                    : (
                        <>
                            <ScrollView>
                            
                                <Content>
                                    <Label>
                                        Pizzas
                                    </Label>
            
                                    <ItemsList 
                                        viewOnly
                                        items={order?.pizzas}
                                    />
            
                                    <Divider />
            
                                    <TotalContainer>
                                        <Text>
                                            Total
                                        </Text>
                                        <FormatCurrency 
                                            value={order?.total}
                                        />
                                    </TotalContainer>
                                </Content>
            
                                <Content>
                                    <Label>
                                        Forma de pagamento
                                    </Label>
                                    <Text>
                                        {order?.payment_term}
                                    </Text>
                                </Content>

                                <Content>
                                    <Label>
                                        Estabelecimento
                                    </Label>
                                    <Text>
                                        {order?.company_name}
                                    </Text>
                                </Content>
            
                                <Content>
                                    <Label>
                                        Endereço de entrega
                                    </Label>
                                    <Text>
                                        A aproximadamente {calculateDistance(
                                            { 
                                                latitude: Number(order?.user_latitude), 
                                                longitude: Number(order?.user_longitude) 
                                            }, 
                                            { 
                                                latitude: Number(order?.establishment_latitude), 
                                                longitude: Number(order?.establishment_longitude) 
                                            }
                                        )} km de você
                                    </Text>
                                </Content>
            
                                <Map 
                                    liteMode
                                    width={width}
                                    height={height / 3}
                                    region={{
                                        latitudeDelta: 0.020,
                                        longitudeDelta: 0.020,
                                        latitude: Number(order?.user_latitude),
                                        longitude: Number(order?.user_longitude),
                                    }}
                                />
                            </ScrollView>
                            <Content>
                                {
                                    !order?.finished
                                        ? (
                                            <PrimaryButton
                                                title="Confirmar recebimento"
                                                onPress={() => handleOrderFinished()}
                                            />
                                        )
                                        : null
                                }
                            </Content>
                        </>
                    )    
            }
        </Container>
    );
};

const mapStateToProps = ({ orders: { order, loading }}) =>  (
    {
        order,
        loading,
    }
);

const mapDispatchToProps = dispatch => (
    {
        onGetOrder: id => dispatch(getOrder(id)),
        onOrderUpdated: order => dispatch(updateOrder(order)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
