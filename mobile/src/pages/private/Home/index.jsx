import React from 'react';

import { View, ScrollView } from 'react-native';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
    SubTitle,
    Container,
    ScrollList,
} from '../../../components';

import Logo from '../../../assets/logo.svg';

import { 
    Icon,
    Header, 
    SearchInput, 
    SearchContainer, 
} from './styles';

const Home = () => {
    
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <Container>
                <Header>
                    <SubTitle>
                        As melhores{'\n'}
                        pizzarias da região
                    </SubTitle>
                    <Logo width={50} height={100} />
                </Header>
                <SearchContainer>
                    <SearchInput 
                        placeholder="Pesquisar"                    
                    />
                    <Icon icon={faSearch} />
                </SearchContainer>
                <View style={{ flex: 2 }}>
                    <ScrollList 
                        label="Em destaque"
                        items={[
                            {
                                id: 1,
                                title: 'Pizzaria do Zé',
                                subtitle: 'A aproximadamente 3km de você',
                                image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80'
                            },
                            {
                                id: 2,
                                title: 'Pizzaria do Zé',
                                subtitle: 'A aproximadamente 3km de você',
                                image: 'https://www.jornaldafronteira.com.br/wp-content/uploads/2019/07/5d11589e51f93-10.jpg'
                            },
                            {
                                id: 3,
                                title: 'Pizzaria do Zé',
                                subtitle: 'A aproximadamente 3km de você',
                                image: 'https://www.jornaldafronteira.com.br/wp-content/uploads/2019/07/5d11589e51f93-10.jpg'
                            },
                            {
                                id: 4,
                                title: 'Pizzaria do Zé',
                                subtitle: 'A aproximadamente 3km de você',
                                image: 'https://www.jornaldafronteira.com.br/wp-content/uploads/2019/07/5d11589e51f93-10.jpg'
                            },
                        ]}
                    />
                    <ScrollList 
                        label="Próximas a você"
                        items={[
                            {
                                id: 1,
                                title: 'Pizzaria do Zé',
                                subtitle: 'A aproximadamente 3km de você',
                                image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80'
                            },
                            {
                                id: 2,
                                title: 'Pizzaria do Zé',
                                subtitle: 'A aproximadamente 3km de você',
                                image: 'https://www.jornaldafronteira.com.br/wp-content/uploads/2019/07/5d11589e51f93-10.jpg'
                            },
                            {
                                id: 3,
                                title: 'Pizzaria do Zé',
                                subtitle: 'A aproximadamente 3km de você',
                                image: 'https://www.jornaldafronteira.com.br/wp-content/uploads/2019/07/5d11589e51f93-10.jpg'
                            },
                            {
                                id: 4,
                                title: 'Pizzaria do Zé',
                                subtitle: 'A aproximadamente 3km de você',
                                image: 'https://www.jornaldafronteira.com.br/wp-content/uploads/2019/07/5d11589e51f93-10.jpg'
                            },
                        ]}
                    />
                </View>
            </Container>
        </ScrollView>
    );
};

export default Home;
