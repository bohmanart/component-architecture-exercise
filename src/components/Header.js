import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';

const HeaderStyle = styled.header`
    margin-bottom: 0.5rem;
`;

const Header = ({title, subTitle, subTitleLevel='4'}) => (
    <header>
        <Heading level={subTitleLevel}>{subTitle}</Heading>
        <Heading level="1">{title}</Heading>
    </header>
);

export default Header;
