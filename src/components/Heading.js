import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 1.5rem;
`;

const H2 = styled.h2`
    font-size: 1.3rem;
`;

const H3 = styled.h3`
    font-size: 1.1rem;
`;

const H4 = styled.h4`
    font-size: 1.0rem;    
`;

const Heading = ({level, children}) => {
    switch (level) {
        case '1':
            return (<H1>{children}</H1>)
            break;

        case '2':
            return (<H2>{children}</H2>)
            break;

        case '3':
            return (<H3>{children}</H3>)
            break;

        case '4':
            return (<H4>{children}</H4>)
            break;
    }
}

export default Heading;
