import React, { useCallback } from 'react';

import { debounce } from 'underscore';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { 
    Icon,
    Container,
    SearchInput,
 } from './styles';

const Search = ({ onChangeText }) => {
    const handleOnChangeText = useCallback((text) => (
        debounce(onChangeText(text), 300)
    ), [onChangeText]);

    return (
        <Container>
            <Icon icon={faSearch} />
            <SearchInput
                placeholder="Pesquisar"                    
                onChangeText={handleOnChangeText}
            />
        </Container>
    );
};

export default Search;