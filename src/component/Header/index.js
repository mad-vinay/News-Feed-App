import React from 'react';
import Styled from './style';
const Header = ({
    headingText,
    subHeading
}) => {
    return (
        <Styled.Container>
            <h1 className="headingStyle">{headingText}</h1>
            <span>{subHeading}</span>
        </Styled.Container>
    )
}
export default Header
