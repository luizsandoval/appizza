import React, { useState, useCallback, useEffect } from 'react';

import 'leaflet/dist/leaflet.css';

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { icon } from 'leaflet';

import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';

import * as yup from 'yup';

import { signUp } from '../../services/establishments.service';

import isValid from '../../validators/CNPJValidator';

import BackButton from '../../components/BackButton';
import ErrorMessage from '../../components/ErrorMessage';
import PrimaryButton from '../../components/PrimaryButton';
import PasswordInput from '../../components/PasswordInput';

import { Container, FormContainer } from './styles';

const DESCRIPTION_MAX_LENGTH = 300;

/** Sao Paulo Coordinates */
const DEFAULT_LATITUDE = -23.533773;
const DEFAULT_LONGITUDE = -46.625290;

const SignUpSchema = yup.object().shape({
    company_name: yup
        .string()
        .required('A razão social é obrigatória'),
    fantasy_name: yup
        .string()
        .required('O nome fantasia é obrigatório'),
    cnpj: yup
        .string()
        .test('valid', 'CNPJ Inválido', isValid)
        .required('O CNPJ é obrigatório'),
    email: yup
        .string()
        .email('E-mail inválido')
        .required('O e-mail é obrigatório'),
    description: yup
        .string()
        .max(DESCRIPTION_MAX_LENGTH, `O limite de caracteres foi atingido (${DESCRIPTION_MAX_LENGTH})`),
    password: yup
        .string()
        .required('A senha é obrigatória'),
    phone: yup
        .string()
        .required('O número de telefone é obrigatório'),
    whatsApp: yup
        .string()
        .required('O número do WhatsApp é obrigatório'),
});

const customMarker = icon(
    { 
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/1200px-Google_Maps_pin.svg.png', 
        iconSize: { x: 30, y: 50 },
    }
);

const MapMarker = ({ handleMapClick, selectedPosition }) => {
    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
            handleMapClick(e);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    return (
        <Marker 
            position={selectedPosition}
            icon={customMarker}
        />
    );
};

const SignUp = () => {
    const [initialPosition, setInitialPosition] = useState([DEFAULT_LATITUDE, DEFAULT_LONGITUDE]);
    const [selectedPosition, setSelectedPosition] = useState([0, 0]);

    const { register, errors, formState, getValues } = useForm({ mode: 'onBlur', validationSchema: SignUpSchema });

    const history = useHistory();

    const goToSignIn = useCallback(() => history.push('/signIn'), [history]);

    const handleRegister = useCallback((e) => {
        e.preventDefault();

        const establishment = {
            ...getValues(),
            latitude: selectedPosition[0],
            longitude: selectedPosition[1],
        };

        signUp(establishment)
            .then(() => goToSignIn());
    }, [getValues, goToSignIn, selectedPosition]);

    const handleMapClick = useCallback(({ latitude, longitude }) => {
        setSelectedPosition([latitude, longitude]);
    }, []); 

    const isFormValid = () => formState.isValid && selectedPosition.length && (!selectedPosition.includes(0));

    useEffect(() => {
        navigator   
            .geolocation
            .getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;

                setInitialPosition([latitude, longitude])
            }, err => console.log(err), { enableHighAccuracy: true });
    }, []);

    return (
        <Container>
            <FormContainer>
                <header>
                    <BackButton>
                        Voltar para login
                    </BackButton>
                </header>

                <form onSubmit={(e) => handleRegister(e)} noValidate>
                    <h2>
                        Sobre
                    </h2>

                    <fieldset className="location">
                        <label htmlFor="map">Localização</label>
                        <MapContainer
                            center={initialPosition}
                            style={
                                {
                                    width: '100%',
                                    height: '100%',
                                }
                            }
                            zoom={15}
                        >
                            <TileLayer
                                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                            />
                            <MapMarker 
                                selectedPosition={selectedPosition || initialPosition}
                                handleMapClick={handleMapClick}
                            />
                        </MapContainer>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="cnpj">CNPJ</label>
                        <input 
                            name="cnpj" 
                            type="text"
                            ref={register}
                            autoFocus
                            required
                        />
                        {errors.cnpj && <ErrorMessage>{errors.cnpj.message}</ErrorMessage>}
                    </fieldset>
                    <fieldset>
                        <label htmlFor="company_name">Razão Social</label>
                        <input 
                            name="company_name" 
                            type="text"
                            ref={register}
                            required
                        />
                        {errors.company_name && <ErrorMessage>{errors.company_name.message}</ErrorMessage>}
                    </fieldset>
                    <fieldset>
                        <label htmlFor="fantasy_name">Nome Fantasia</label>
                        <input 
                            name="fantasy_name" 
                            type="text"
                            ref={register}
                            required
                        />
                        {errors.fantasy_name && <ErrorMessage>{errors.fantasy_name.message}</ErrorMessage>}
                    </fieldset>
                    <fieldset>
                        <label htmlFor="description">Descrição <small>(opcional)</small></label>
                        <textarea 
                            name="description" 
                            type="text"
                            maxLength={DESCRIPTION_MAX_LENGTH}
                            ref={register}
                        />
                        {
                            errors.description 
                                ? (
                                    <ErrorMessage>
                                        {errors.description.message}
                                    </ErrorMessage>
                                )
                                : (
                                    <small className="hint">
                                        Dê uma breve descrição sobre o seu estabelecimento
                                    </small>
                                )
                        }
                    </fieldset>

                    <h2>
                        Contato
                    </h2>

                    <fieldset>
                        <label htmlFor="phone">Telefone</label>
                        <input 
                            name="phone" 
                            type="tel" 
                            ref={register}
                            required
                        />
                        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                    </fieldset>
                    <fieldset>
                        <label htmlFor="whatsApp">WhatsApp</label>
                        <input 
                            name="whatsApp" 
                            type="tel" 
                            ref={register}
                            required
                        />
                        {
                            errors.whatsApp
                                ? (
                                    <ErrorMessage>{errors.whatsApp.message}</ErrorMessage>
                                )
                                : (
                                    <small className="hint">
                                        Esse número ficará disponível para contato via WhatsApp do Cliente
                                    </small>
                                )
                        }
                    </fieldset>

                    <h2>
                        Dados de acesso
                    </h2>

                    <fieldset>
                        <label htmlFor="email">E-mail</label>
                        <input 
                            name="email" 
                            type="email" 
                            ref={register}
                            required 
                        />
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </fieldset>
                    <fieldset>
                        <PasswordInput forwardRef={register} />
                        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                    </fieldset>
                    <PrimaryButton type="submit" disabled={!isFormValid()}>
                        Cadastrar-se agora
                    </PrimaryButton>
                </form>
            </FormContainer>
        </Container>
    )
};

export default SignUp;
