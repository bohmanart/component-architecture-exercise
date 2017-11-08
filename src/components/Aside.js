import React from 'react';
import styled from 'styled-components';

const StyledAside = styled.aside`
    @media screen and (min-width: 600px) {
	    @supports (display: grid) {
            float: right;
            width: 245px;
            margin: 0 -9.7rem 1rem 1rem;
        }
    }
`;

const Aside = ({children}) => (
    <StyledAside>{children}</StyledAside>
);

export default Aside;
