import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import DropZone from '../../../../components/DropZone';
import BackButton from '../../../../components/BackButton';
import ErrorMessage from '../../../../components/ErrorMessage';
import PrimaryButton from '../../../../components/PrimaryButton';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Container, Header, StyledForm, Icon } from './styles';

const PizzaSchema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    ingredients: yup.string().required('Os ingredientes são obrigatórios'),
    price: yup.number().required('O preço é obrigatório'),
    description: yup.string().max(100, 'A descrição não pode ultrapassar 100 caracteres'),
})

const Keep = ({ handleKeep, handleClose, setActiveComponent, pizza }) => {
    const [pizzaImage, setPizzaImage] = useState(pizza.image || {});

    const { register, errors, formState, getValues } = useForm({
        validationSchema: PizzaSchema,
        mode: 'onBlur',
        defaultValues: pizza || {},
    });

    const handleFileUploaded = (file) => setPizzaImage(file);

    const handleSubmit = (e) => {
        e.preventDefault();

        const pizza = getValues();

        pizza.image = pizzaImage;

        handleKeep(pizza);
    };

    const isFormValid = () => formState.isValid && isImageUploaded();

    const isImageUploaded = () => !!(Object.keys(pizzaImage).length);

    return (
        <Container>
            <Header>
                <div>
                    <BackButton 
                        customAction={() => setActiveComponent('details')}
                    />
                    <h3>Manter Pizza</h3>
                </div>
                <Icon 
                    icon={faTimes} 
                    onClick={() => handleClose()}
                />
            </Header>
            <StyledForm onSubmit={(e) => handleSubmit(e)} noValidate>
                <fieldset>
                    <DropZone 
                        onFileUploaded={handleFileUploaded}
                        defaultFile={pizza.image}
                    />
                    {
                        !isImageUploaded() 
                        &&
                        <ErrorMessage>
                            Adicione uma imagem para a pizza
                        </ErrorMessage>
                    }
                </fieldset>
                <fieldset>
                    <label htmlFor="name">Nome</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        ref={register}
                        autoFocus
                        required
                    />
                    {errors.name && (
                        <ErrorMessage>{errors.name.message}</ErrorMessage>
                    )}
                </fieldset>
                <fieldset>
                    <label htmlFor="ingredients">Ingredientes</label>
                    <input
                        id="ingredients"
                        name="ingredients"
                        type="text"
                        ref={register}
                        required
                    />
                    {errors.ingredients && (
                        <ErrorMessage>
                            {errors.ingredients.message}
                        </ErrorMessage>
                    )}
                </fieldset>
                <fieldset>
                    <label htmlFor="price">Preço</label>
                    <input
                        id="price"
                        name="price"
                        type="text"
                        ref={register}
                        required
                    />
                    {errors.price && (
                        <ErrorMessage>{errors.price.message}</ErrorMessage>
                    )}
                </fieldset>
                <fieldset>
                    <label htmlFor="description">
                        Descrição
                        <small>
                            (opcional)
                        </small>
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        maxLength="100"
                        ref={register}
                    />
                    {errors.price && (
                        <ErrorMessage>{errors.description.message}</ErrorMessage>
                    )}
                </fieldset>
                <PrimaryButton 
                    type="submit"
                    disabled={!isFormValid()}
                >
                    {
                        pizza && pizza.id
                            ? 'Atualizar Pizza'
                            : 'Cadastrar Pizza'
                    }
                </PrimaryButton>
            </StyledForm>
        </Container>
    );
};

export default Keep;
