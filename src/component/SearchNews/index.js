import React from 'react';
import Styled from './style';

const SearchNews = ({
    handleChange,
    labelText
}) => {
    return (
        <Styled.Container>
            <input type="text" placeholder={labelText} onChange={handleChange} />
        </Styled.Container>
    )
}
export default SearchNews
