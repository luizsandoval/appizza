import React, { useState, useEffect, useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { create as createOrder } from '../../../services/orders.service';
import { getAll as getPizzas } from '../../../services/pizzas.service';

import Checkbox from '../../../components/Checkbox';
import PizzaCard from '../../../components/PizzaCard';
import BackButton from '../../../components/BackButton';
import PrimaryButton from '../../../components/PrimaryButton';
import SecondaryButton from '../../../components/SecondaryButton';
import DividerWithText from '../../../components/DividerWithText';
import ErrorMessage from '../../../components/ErrorMessage';

import formatCurrency from '../../../utils/formatCurrency';

import AppContext from '../../../AppContext';

import OnTheWay from '../../../assets/on-the-way.svg';

import {
    Container,
    FormContainer,
    PizzasContainer,
    ReviewContainer,
    FormHeader,
    PizzaItem,
    PizzaDetails,
    TotalContainer,
    Divider,
    FeedbackContainer,
    StyledImage,
} from './styles';

const OrderSchema = yup.object().shape({
    address: yup.string().required('O endereço de entrega é obrigatório'),
});

const Order = () => {
    const { user } = useContext(AppContext);

    const [pizzas, setPizzas] = useState([]);
    const [selectedPizzas, setSelectedPizzas] = useState([]);
    const [activeStep, setActiveStep] = useState('order');
    const [sameRegisterAddress, setSameRegisterAddress] = useState(true);

    const history = useHistory();

    const { errors, register, formState, getValues } = useForm({
        mode: 'blur',
        validationSchema: OrderSchema,
    });

    const handlePizzaSelect = (pizza) => (!isPizzaSelected(pizza.id)
        ? setSelectedPizzas([...selectedPizzas, pizza])
        : setSelectedPizzas((pizzas) =>
              pizzas
                .filter((selectedPizza) => selectedPizza.id !== pizza.id)
          )
    );

    const isPizzaSelected = (id) => selectedPizzas.some(pizza => pizza.id === id);

    const handleSubmit = (e) => {
        e.preventDefault();

        const pizzasIds = selectedPizzas.map(pizza => pizza.id);

        const order = {
            ...getValues(),
            pizzas_ids: pizzasIds
        };

        console.log('[ORDER] ==> ', order);

        setActiveStep('feedback');

        // TODO: FIX THIS ==>

        // createOrder(order)
        //     .then(() => setActiveStep('feedback'));
    };

    const isFormValid = () => formState.isValid && selectedPizzas.length;

    const getTotal = () => formatCurrency(selectedPizzas.reduce((a, { price }) => a + price, 0));

    const goBackToHome = () => history.push('/');

    useEffect(() => {
        getPizzas().then((pizzas) => setPizzas(pizzas));
    }, []);

    const getCurrentStep = () => {
        switch (activeStep) {
            case 'order':
                return (
                    <>
                        <FormHeader>
                            <BackButton />
                            <h2>Novo pedido</h2>
                        </FormHeader>
                        <fieldset>
                            <h3>Pizzas</h3>
                            <PizzasContainer>
                                {pizzas.map((pizza) => (
                                    <PizzaCard
                                        id={pizza.id}
                                        key={pizza.id}
                                        pizzaName={pizza.name}
                                        price={pizza.price}
                                        ingredients={pizza.ingredients}
                                        imageSource={pizza.image}
                                        selectable
                                        onSelect={() =>
                                            handlePizzaSelect(pizza)
                                        }
                                        checked={isPizzaSelected(pizza.id)}
                                        showActions={false}
                                    />
                                ))}
                            </PizzasContainer>
                            {!selectedPizzas.length && (
                                <ErrorMessage>
                                    Selecione ao menos uma pizza
                                </ErrorMessage>
                            )}
                        </fieldset>
                        <fieldset>
                            <h3>Entrega</h3>
                            <Checkbox
                                checked={sameRegisterAddress}
                                onChange={(checked) => console.log(checked)}
                            >
                                O endereço de entrega é o mesmo de cadastro
                            </Checkbox>
                            <input
                                type='text'
                                name='address'
                                ref={register}
                                defaultValue={user.address}
                            />
                            {errors.address && (
                                <ErrorMessage>
                                    {errors.address.message}
                                </ErrorMessage>
                            )}
                        </fieldset>
                        <PrimaryButton
                            type='button'
                            onClick={() => setActiveStep('review')}
                            disabled={!isFormValid()}
                        >
                            Revisar pedido
                        </PrimaryButton>
                    </>
                );
            case 'review':
                return (
                    <>
                        <h2>Revisão de pedido</h2>
                        <ReviewContainer>
                            <h3>Pizzas</h3>
                            {selectedPizzas.map((pizza) => (
                                <PizzaItem key={pizza.id}>
                                    <PizzaDetails>
                                        <strong>
                                            {pizza.name}
                                        </strong>
                                        <small>
                                            {pizza.ingredients}
                                        </small>
                                    </PizzaDetails>
                                    <span>
                                        R$ 
                                        <b>
                                            {formatCurrency(pizza.price)}
                                        </b>
                                    </span>
                                </PizzaItem>
                            ))}
                            <Divider />
                            <TotalContainer>
                                <strong>
                                    Total
                                </strong>
                                <span>
                                    R$ 
                                    <b>
                                        {getTotal()}
                                    </b>
                                </span>
                            </TotalContainer>
                            <h3>Entrega</h3>
                            <label>{user.address}</label>
                        </ReviewContainer>
                        <PrimaryButton
                            type="submit"
                        >
                            Confirmar pedido
                        </PrimaryButton>
                        <DividerWithText text="ou" />
                        <SecondaryButton 
                            type="button"
                            onClick={() => setActiveStep('order')}
                        >
                            Alterar dados
                        </SecondaryButton>
                    </>
                );
            case 'feedback':
                return (
                    <>
                        <FeedbackContainer>
                            <h1>Hmmm...</h1>
                            <StyledImage src={OnTheWay} alt="Uma mulher com a pele roxa está em uma moto vermelha com uma caixa de pizza na garupa" />
                            <h2>
                                A melhor pizza da região já está a caminho da sua casa
                            </h2>
                        </FeedbackContainer>
                        <PrimaryButton
                            type="button"
                            onClick={() => goBackToHome()}
                        >
                            Voltar para Início
                        </PrimaryButton>
                    </>
                );
            default: return null;
        }
    };

    return (
        <Container>
            <FormContainer>
                <form 
                    onSubmit={(e) => handleSubmit(e)} 
                    noValidate
                >
                    { getCurrentStep() }
                </form>
            </FormContainer>
        </Container>
    );
};

export default Order;
