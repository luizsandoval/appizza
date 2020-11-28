import React, { useState } from 'react';

import { 
    Search,
    Container,
    ScrollList,
    FloatingActionButton,
} from '../../../../components';

const Menu = ({ establishment }) => {
    const [selectedPizzas, setSelectedPizzas] = useState([]);

    return (
        <Container>
            <Search />
            <ScrollList 
                items={(establishment?.pizzas?.map(({ id, name, price, image }) => (
                    {
                        id,
                        image,
                        title: name,
                        subtitle: price,
                    }
                )))}
            />
            {
                selectedPizzas.length 
                    ? (
                        <FloatingActionButton 
                            size="large"
                            position="center"
                            title="Novo pedido"
                        />
                    )
                    : null
            }
        </Container>
    );
};

export default Menu;