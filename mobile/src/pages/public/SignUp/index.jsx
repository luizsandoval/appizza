import React, 
{ 
    useRef,
    useState, 
    useCallback,
} from 'react';

import { ScrollView } from 'react-native';

import { useForm, FormProvider } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import { FontAwesomeIcon  as Icon } from '@fortawesome/react-native-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import {
    BackButton,
    PrimaryButton,
    FloatingActionButton,
} from '../../../components';

import isValid from '../../../utils/cpfValidator';

import Logo from '../../../assets/logo.svg';

import {
    AccessData,
    PersonalData,
} from './Steps';

import { 
    Form,
    Header,
    StyledContainer,
 } from './styles';

const steps = [
    <PersonalData />,
    <AccessData />
];

const SIGN_UP_SCHEMA = yup
    .object()
    .shape(
        {
            first_name: yup
                .string()
                .required('O primeiro nome é obrigatório'),
            last_name: yup
                .string()
                .required('O último nome é obrigatório'),
            cpf: yup
                .string()
                .required('O CPF é obrigatório')
                .test('valid', 'CPF Inválido', isValid),
            email: yup
                .string()
                .required('O e-mail é obrigatório')
                .email('E-mail inválido'),
            password: yup
                .string()
                .required('A senha é obrigatória'),
        }
    );

const SignUp = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef();

    const methods = useForm(
        { 
            mode: 'onChange',
            resolver: yupResolver(SIGN_UP_SCHEMA)
        }
    );

    const isFormValid = () => methods.formState.isValid;

    const handleSignUp = useCallback(() => {
        const { 
            cpf,
            email,
            password,
            last_name,
            first_name,
        } = methods.getValues();

        setIsLoading(true);

        // handle sign up here...
    }, [methods.getValues]);
    
    const getActiveStepComponent = useCallback(() => steps[activeStep], [steps, activeStep]);

    const isFirstStep = useCallback(() => activeStep === 0, [activeStep]);

    const isLastStep = useCallback(() => activeStep === (steps.length - 1), [activeStep, steps.length]);

    const goToNextStep = useCallback(() => setActiveStep(step => step + 1), [setActiveStep]);

    const goToPreviousStep = useCallback(() => setActiveStep(step => step - 1), [setActiveStep]);

    return (
        <>
            <ScrollView
                ref={scrollRef}
            >
                <StyledContainer defaultPadding={false}>
                    <Header>
                        <BackButton 
                            customAction={!isFirstStep() && goToPreviousStep}
                        />
                        <Logo width={100} height={200} />
                    </Header>
                    <Form>
                        <FormProvider {...methods}>
                            {getActiveStepComponent()}
                        </FormProvider>

                        <PrimaryButton
                            isLoading={isLoading}
                            disabled={!isFormValid()}
                            title={(
                                isLastStep() 
                                    ? 'Finalizar cadastro' 
                                    : 'Continuar'
                            )}
                            onPress={(
                                isLastStep() 
                                    ? handleSignUp
                                    : goToNextStep
                            )}
                        />
                    </Form>
                </StyledContainer>
            </ScrollView>
            <FloatingActionButton
                color="black"
                variation="lighten"
                onPress={() => scrollRef.current.scrollToEnd()}
            >
                <Icon icon={faAngleDoubleDown} color="#fff" />
            </FloatingActionButton>
        </>
    );
}

export default SignUp;
