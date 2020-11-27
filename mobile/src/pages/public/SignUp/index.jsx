import React, 
{ 
    useRef,
    useMemo,
    useState,
    useCallback,
} from 'react';

import { ScrollView } from 'react-native';

import { connect } from 'react-redux';

import { signUp } from '../../../store/thunks/auth';

import { FontAwesomeIcon  as Icon } from '@fortawesome/react-native-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import {
    BackButton,
    PrimaryButton,
    FloatingActionButton,
} from '../../../components';

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

const SignUp = ({ onSignUp, navigation }) => {
    const [user, setUser] = useState(
        {
            first_name: '',
            last_name: '',
            cpf: '',
            email: '',
            password: '',
        }
    );
    const [activeStep, setActiveStep] = useState(0);
    const [validSteps, setValidSteps] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const scrollRef = useRef();

    const isFormValid = useCallback(() => validSteps.includes(activeStep), [activeStep, validSteps]);

    const steps = useMemo(() => (
        [
            <PersonalData
                user={user}
                setUser={setUser}
                setValidSteps={setValidSteps}
            />,
            <AccessData
                user={user}
                setUser={setUser}
                setValidSteps={setValidSteps}
            />
        ]
    ), [user, setUser, setValidSteps]);

    const handleSignUp = useCallback(() => {
        setIsLoading(true);
        
        onSignUp(user)
            .then(() => navigation.navigate('SignIn'))
            .finally(() => setIsLoading(false));
    }, [user]);

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
                        {getActiveStepComponent()}

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

const mapDispatchToProps = dispatch => (
    {
        onSignUp: user => dispatch(signUp(user)),
    }
);

export default connect(null, mapDispatchToProps)(SignUp);
