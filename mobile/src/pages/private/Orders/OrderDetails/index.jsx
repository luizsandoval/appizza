import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { getOrder } from '../../../../store/thunks/orders';

import { 
    Loader,
    ItemsList,
    Container, 
    PrimaryButton,
} from '../../../../components';

const OrderDetails = (
    { 
        order, 
        route, 
        loading, 
        onGetOrder,
    }
) => {
    const { id } = route.params;

    useEffect(() => {
        onGetOrder(id);
    }, []);

    return (
        loading 
            ? <Loader />
            : (
                <>
                    <Container>
                        <ItemsList 
                            viewOnly
                            items={order?.pizzas}
                        />
                        {
                            !order?.finished
                                ? (
                                    <PrimaryButton 
                                        title="Confirmar recebimento"
                                    />
                                )
                                : null
                        }
                    </Container>
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
