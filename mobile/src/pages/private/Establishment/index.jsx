import React, 
{ 
    useMemo, 
    useState, 
    useEffect,
    useCallback,
} from 'react';

import { ScrollView } from 'react-native';

import { connect } from 'react-redux';

import { getEstablishment } from '../../../store/thunks/establishments';

import { 
    Loader,
    SubTitle,
    Container,
} from '../../../components';

import Menu from './Menu';
import Details from './Details';

import { 
    Header, 
    TabText,
    TabWrapper,
    TabsContainer, 
} from './styles';

const Establishment = (
    { 
        route,
        loading, 
        establishment, 
        onGetEstablishment, 
    }
) => {
    const { id } = route.params;
    const [activeTab, setActiveTab] = useState('menu');

    const tabs = useMemo(() => (
        {
            menu: <Menu establishment={establishment} />,
            details: <Details establishment={establishment} />
        }
    ), [establishment]);

    const getActiveTabComponent = useCallback(() => tabs[activeTab], [activeTab, tabs]);

    useEffect(() => {
        onGetEstablishment(id);
    }, []);

    return (
        <ScrollView
            contentContainerStyle={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <Container defaultPadding={false}>
                {
                    !establishment && loading
                        ? <Loader />
                        : (
                            <>
                                <Header>
                                    <SubTitle>
                                        {establishment?.name}
                                    </SubTitle>
                                </Header>
                                <TabsContainer>
                                    <TabWrapper
                                        active={activeTab === 'menu'}
                                        onPress={() => setActiveTab('menu')}
                                    >
                                        <TabText
                                            active={activeTab === 'menu'}
                                        >
                                            Cardápio
                                        </TabText>
                                    </TabWrapper>
                                    <TabWrapper
                                        active={activeTab === 'details'}
                                        onPress={() => setActiveTab('details')}
                                    >
                                        <TabText
                                            active={activeTab === 'details'}
                                        >
                                            Detalhes
                                        </TabText>
                                    </TabWrapper>
                                </TabsContainer>
                                {
                                    getActiveTabComponent()
                                }
                            </>
                        )
                }
            </Container>
        </ScrollView>
    );
}

const mapStateToProps = ({ establishments: { establishment, loading }}) => (
    {
        loading,
        establishment,
    }
);

const mapDispatchToProps = dispatch => (
    {
        onGetEstablishment: id => dispatch(getEstablishment(id)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Establishment);
