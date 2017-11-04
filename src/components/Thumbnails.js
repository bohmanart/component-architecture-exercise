import React from 'react';
import styled from 'styled-components';

const Thumbnails = ({thumbs}) => (
    <nav>
        {thumbs.map(thumb => <button><img src={thumb.src} alt={thumb.alt}/></button>)}
    </nav>
);

export default Thumbnails;
