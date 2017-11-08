import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: 1px solid var(--drk-blue);
    padding: 0;
    border-radius: 0;

    & + & {
        margin-left: 0.5rem;
    }
`;

const Thumbnails = ({thumbs, className}) => (
    <nav className={className}>
        {thumbs.map((thumb, index) => <StyledButton key={index}><img src={thumb.src} alt={thumb.alt}/></StyledButton>)}
    </nav>
);

export default Thumbnails;
