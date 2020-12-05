import React, { useEffect } from 'react';

import { Dimensions } from 'react-native';

import { connect } from 'react-redux';

import { getOrder } from '../../../../store/thunks/orders';

import { 
    Map,
    Text,
    Label,
    Loader,
    Divider,
    ItemsList,
    PrimaryButton,
} from '../../../../components';

import calculateDistance from '../../../../utils/calculateDistance';

import { Content, TotalContainer } from './styles';

const OrderDetails = (
    { 
        order, 
        route, 
        loading, 
        onGetOrder,
    }
) => {
    const { width, height } = Dimensions.get('window'); 
    const { id } = route.params;

    useEffect(() => {
        onGetOrder(id);
    }, []);

    return (
        loading 
            ? <Loader />
            : (
                <>
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
                            <Label>
                                Total
                            </Label>
                            <Text>
                                {order?.total}
                            </Text>
                        </TotalContainer>
                    </Content>

                    <Content>
                        <Label>
                            Forma de pagamento
                        </Label>
                        <Text>
                            {order.paymentTerm}
                        </Text>
                    </Content>

                    <Content>
                        <Label>
                            Endereço de entrega
                        </Label>
                        <Text>
                            A aproximadamente {calculateDistance(
                                { 
                                    latitude: order.user_latitude, 
                                    longitude: order.user_longitude 
                                }, 
                                { 
                                    latitude: order.establishment_latitude, 
                                    longitude: order.establishment_longitude 
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
                            latitude: order.user_latitude,
                            longitude: order.user_longitude,
                        }}
                    />
                    {
                        !order?.finished
                            ? (
                                <Content>
                                    <PrimaryButton 
                                        title="Confirmar recebimento"
                                    />
                                </Content>
                            )
                            : null
                    }
                </>
            )
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
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
