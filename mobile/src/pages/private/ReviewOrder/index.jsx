import React from 'react';

import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { 
    Container,
    FormatCurrency,
    FloatingActionButton,
} from '../../../components';

import { 
    ItemName,
    ItemCard,
    ItemPrice,
    ItemTitle,
    ItemDetails,
    StyledTitle,
    ItemsContainer,
    ItemIngredients
} from './styles';

const ReviewOrder = ({ items }) => {

    return (
        <Container>
            <StyledTitle>
                Por favor,{'\n'}
                revise seu pedido
            </StyledTitle>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 64 }}
            >
                <ItemsContainer>
                    {
                        items
                            .map(item => (
                                <ItemCard
                                    key={item.id}
                                >
                                    <ItemDetails>
                                        <ItemTitle>
                                            <ItemName>
                                                {item.name}
                                            </ItemName>
                                            <ItemIngredients>
                                                {item?.ingredients}
                                            </ItemIngredients>
                                        </ItemTitle>
                                        <FormatCurrency
                                            value={item.price}
                                            renderText={() => <ItemName />}
                                        />
                                    </ItemDetails>
                                </ItemCard>
                            ))
                    }
                </ItemsContainer>
            </ScrollView>
            <FloatingActionButton 
                size="large"
                position="center"
                title="Confirmar pedido"
            />
        </Container>
    );
};

const mapStateToProps = ({ cart: { items }}) => (
    {
        items,
    }
);

export default connect(mapStateToProps)(ReviewOrder);
