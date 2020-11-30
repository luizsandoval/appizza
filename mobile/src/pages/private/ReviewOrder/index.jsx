import React, 
{ 
    useState, 
    useCallback,
} from 'react';

import { Alert, ScrollView } from 'react-native';

import { connect } from 'react-redux';

import RadioButtons from 'radio-buttons-react-native';

import LottieView from 'lottie-react-native';

import { useTheme } from 'styled-components';

import { createOrder } from '../../../store/thunks/orders';
import { 
    itemRemoved,
    itemQuantityDecreased, 
    itemQuantityIncreased, 
} from '../../../store/actions/cart';

import { 
    Title,
    SubTitle,
    Container,
    ItemsList,
    FormatCurrency,
    FloatingActionButton,
} from '../../../components';

import { 
    Label,
    Divider,
    StyledTitle,
    TotalContainer,
    AnimationWrapper,
} from './styles';

const PAYMENT_TERMS = [
    'Dinheiro',
    'Cartão de Débito',
    'Cartão de Crédito',
];

const ReviewOrder = (
    { 
        items,
        route,
        user_id,
        navigation,
        onRemoveItem,
        onCreateOrder,
        onIncreaseItemQuantity, 
        onDecreaseItemQuantity,
    }
) => {
    const { establishment_id } = route.params;

    const theme = useTheme();

    const [paymentTerm, setPaymentTerm] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const handleIncreaseItemQuantity = useCallback((item) => onIncreaseItemQuantity(item), [onIncreaseItemQuantity]);

    const handleDecreaseItemQuantity = useCallback((item) => {
        if (item.quantity === 1) {
            return Alert.alert(
                'Remover item?',
                'Tem certeza que deseja remover este item?',
                [
                    {
                        text: 'Sim, remover',
                        onPress: () => onRemoveItem(item),
                    },
                    {
                        text: 'Não, cancelar',
                        style: 'cancel'
                    },
                ],
                { cancelable: false }
            );
        }

        onDecreaseItemQuantity(item);
    }, [onDecreaseItemQuantity]);

    const getOrderTotal = useCallback(() => items.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0), [items]);

    const handleCreateOrder = useCallback(() => {
        setIsLoading(true);

        const order = {
            user_id,
            pizzas: items,
            establishment_id,
            total: getOrderTotal(),
            payment_term: paymentTerm,
        };

        onCreateOrder(order)
            .then(() => navigation.navigate('Feedback'))
            .finally(() => setIsLoading(false));
    }, [items, onCreateOrder, paymentTerm, setIsLoading, navigation]);

    return (
        <Container>
            {
                items.length
                    ? (
                        <>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ paddingBottom: 80 }}
                            >
                                <StyledTitle>
                                    Por favor,{'\n'}
                                    revise seu pedido
                                </StyledTitle>

                                <ItemsList 
                                    items={items}
                                    onIncreaseItemQuantity={handleIncreaseItemQuantity}
                                    onDecreaseItemQuantity={handleDecreaseItemQuantity}
                                />

                                <Divider />

                                <TotalContainer>
                                    <Label noMargin>
                                        Total
                                    </Label>
                                    <FormatCurrency
                                        value={getOrderTotal()}
                                    />
                                </TotalContainer>

                                <Divider />

                                <Label>
                                    Forma de pagamento
                                </Label>

                                <RadioButtons 
                                    data={PAYMENT_TERMS.map(term => (
                                        {
                                            label: term,
                                        }
                                    ))}
                                    activeColor={theme.colors.secondary.main}
                                    selectedBtn={({ label }) => setPaymentTerm(label)}
                                />
                            </ScrollView>

                            <FloatingActionButton
                                size="large"
                                position="center"
                                loading={isLoading}
                                disabled={!paymentTerm}
                                title="Tudo certo, pode confirmar!"
                                onPress={() => handleCreateOrder()}
                            />
                        </>
                    ) : (
                        <>
                            <Title>
                                Ops, 
                                {'\n'}seu pedido 
                                {'\n'}está vazio
                            </Title>
                            <SubTitle>
                                Volte e adicione pizzas {'\n'}para prosseguir
                            </SubTitle>
                            <AnimationWrapper>
                                <LottieView 
                                    loop
                                    autoPlay
                                    source={require('../../../assets/sad-empty-box.json')} 
                                />
                            </AnimationWrapper>
                        </>
                    )
            }
        </Container>
    );
};

const mapStateToProps = (
    { 
        cart: { items }, 
        auth: { user },
    }
) => (
    {
        items,
        user_id: user.id,
    }
);

const mapDispatchToProps = dispatch => (
    {
        onRemoveItem: item => dispatch(itemRemoved(item)),
        onCreateOrder: order => dispatch(createOrder(order)),
        onIncreaseItemQuantity: item => dispatch(itemQuantityIncreased(item)),
        onDecreaseItemQuantity: item => dispatch(itemQuantityDecreased(item)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ReviewOrder);
