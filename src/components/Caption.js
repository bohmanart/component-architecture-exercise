import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.strong`
    display: block;    
    font-weight: bold;
`;

const Caption = ({title, subTitle}) => (
    <figcaption>
        <TitleStyle>{title}</TitleStyle>
        {subTitle}
    </figcaption>
);

export default Caption;
