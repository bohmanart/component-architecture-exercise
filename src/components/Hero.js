import React from 'react';
import styled from 'styled-components';
import Caption from './Caption';
import Thumbnails from './Thumbnails';

const Img = styled.img`
    max-width: 100%;
    margin-bottom: 0.5rem;
`;

const Hero = ({src, alt, title, subTitle, thumbs}) => (
    <figure>
        <Img src={src} alt={alt}/>
        <Caption title={title} subTitle={subTitle}/>
        <Thumbnails thumbs={thumbs}/>
    </figure>
);

export default Hero;
