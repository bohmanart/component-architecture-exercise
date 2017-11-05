import React from 'react';
import styled from 'styled-components';

const StyledFigcaption = styled.figcaption`
    font-size: 0.7rem;
    line-height: 1.5;
`;

const StyledTitle = styled.strong`
    display: block;    
    font-weight: 700;
`;

const Caption = ({title, subTitle, className}) => (
    <StyledFigcaption className={className}>
        <StyledTitle>{title}</StyledTitle>
        {subTitle}
    </StyledFigcaption>
);

export default Caption;
