import React from 'react';
import Heading from './Heading';

const Header = ({title, subTitle, subTitleLevel='6', className}) => (
    <header className={className}>
        <Heading nomargin level={subTitleLevel}>{subTitle}</Heading>
        <Heading nomargin level="1">{title}</Heading>
    </header>
);

export default Header;
