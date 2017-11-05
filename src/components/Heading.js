import React from 'react';
import styled, {css} from 'styled-components';

const nomargin = props => props.nomargin && css`margin: 0;`;

const H1 = styled.h1`
    color: var(--med-blue);
    font-size: 1.5rem;
    font-weight: 300;
    ${nomargin}
`;

const H2 = styled.h2`
    font-size: 1.3rem;
    font-weight: 300;
    margin: 2rem 0 1rem;
    ${nomargin}
`;

const H3 = styled.h3`
    font-size: 1.1rem;
    font-weight: 300;
    ${nomargin}
`;

const H4 = styled.h4`
    font-size: 1rem;
    font-weight: 300;
    ${nomargin}
`;

const H5 = styled.h5`
    font-size: 0.9rem;
    font-weight: 300;
    ${nomargin}
`;

const H6 = styled.h6`
    color: var(--drk-blue);
    font-size: 0.7rem;
    font-weight: 300;
    ${nomargin}
`;

const Heading = ({level, nomargin, children}) => {
    switch (level) {
        case '1':
            return (<H1 nomargin={nomargin}>{children}</H1>)
            break;

        case '2':
            return (<H2 nomargin={nomargin}>{children}</H2>)
            break;

        case '3':
            return (<H3 nomargin={nomargin}>{children}</H3>)
            break;

        case '4':
            return (<H4 nomargin={nomargin}>{children}</H4>)
            break;

        case '5':
            return (<H5 nomargin={nomargin}>{children}</H5>)
            break;

        case '6':
            return (<H6 nomargin={nomargin}>{children}</H6>)
            break;
    }
}

export default Heading;
