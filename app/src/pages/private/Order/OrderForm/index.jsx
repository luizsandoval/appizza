import React, { useState } from 'react';

import { FormHeader, PizzasContainer, Fieldset } from './styles';

import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import Checkbox from '../../../../components/Checkbox';
import PizzaCard from '../../../../components/PizzaCard';
import BackButton from '../../../../components/BackButton';
import PrimaryButton from '../../../../components/PrimaryButton';
import ErrorMessage from '../../../../components/ErrorMessage';

const OrderSchema = yup
    .object()
    .shape(
        {
            address: yup.string().required('O endereço de entrega é obrigatório'),
        }
    );

const OrderForm = ({ pizzas, user, order, setOrder, setActiveStep }) => {
    const [selectedPizzas, setSelectedPizzas] = useState(order.selectedPizzas || []);
    const [sameRegisterAddress, setSameRegisterAddress] = useState(order.sameRegisterAddress || true);

    const { register, errors, getValues, formState } = useForm({ validationSchema: OrderSchema, mode: 'onBlur' });

    const handlePizzaSelect = (pizza) => (!isPizzaSelected(pizza.id)
        ? setSelectedPizzas([...selectedPizzas, pizza])
        : setSelectedPizzas((pizzas) =>
            pizzas
                .filter((selectedPizza) => selectedPizza.id !== pizza.id)
        )
    );

    const isPizzaSelected = (id) => selectedPizzas.some(pizza => pizza.id === id);

    const isFormValid = () => formState.isValid && selectedPizzas.length;

    const handleSubmit = (e) => {
        e.preventDefault();

        const { address } = getValues();

        const order = {
            address,
            selectedPizzas,
            sameRegisterAddress,
        };

        setOrder(order);

        setActiveStep('review');
    }

    return (
        <form 
            onSubmit={(e) => handleSubmit(e)}
            noValidate
        >
            <FormHeader>
                <BackButton />
                <h2>Novo pedido</h2>
            </FormHeader>
            <Fieldset>
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
            </Fieldset>
            <Fieldset>
                <h3>Entrega</h3>
                <Checkbox
                    checked={sameRegisterAddress}
                    onClick={() => setSameRegisterAddress(!sameRegisterAddress)}
                    value={sameRegisterAddress}
                >
                    O endereço de entrega é o mesmo de cadastro
                </Checkbox>
                <input
                    type="address"
                    name="address"
                    ref={register}
                    disabled={sameRegisterAddress}
                    defaultValue={order.address || user.address}
                />
                {errors.address && (
                    <ErrorMessage>
                        {errors.address.message}
                    </ErrorMessage>
                )}
            </Fieldset>
            <PrimaryButton
                type="submit"
                disabled={!isFormValid()}
            >
                Revisar pedido
            </PrimaryButton>
        </form>

    );
};

export default OrderForm;
