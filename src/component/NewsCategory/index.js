import React from 'react';
import Styled from './style';

const NewsCategory = ({
    categoryList,
    fileterNews
}) => {
    return (
        <Styled.ListContainer>
            {categoryList.map(item => {
                return (
                    <li onClick={fileterNews} key={item.id}>{item.label}</li>
                )
            })}
        </Styled.ListContainer>
    )
}
export default NewsCategory
