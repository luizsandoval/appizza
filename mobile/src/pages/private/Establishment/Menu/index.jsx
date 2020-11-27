import React, { useState } from 'react';

import { 
    Search,
    ScrollList,
    FloatingActionButton,
} from '../../../../components';

const Menu = ({ establishment }) => {
    const [selectedPizzas, setSelectedPizzas] = useState([]);

    return (
        <>
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
        </>
    );
};

export default Menu;