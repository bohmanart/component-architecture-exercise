import React from 'react';
import styled from 'styled-components';
import Caption from './Caption';
import Thumbnails from './Thumbnails';

const StyledFigure = styled.figure`
    margin: 0;
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "image   image"
        "caption thumbnails"
`;

const StyledImg = styled.img`
    width: 100%;
    border: 1px solid var(--drk-blue);
    grid-area: image;
`;

const StyledCaption = styled(Caption)`
    margin-left: 0.2rem;    
    grid-area: caption;
`;

const StyledThumbnails = styled(Thumbnails)`
    margin-right: 0.2rem;    
    grid-area: thumbnails;
    justify-self: end;
`;

const Hero = ({src, alt, title, subTitle, thumbs, className}) => (
    <StyledFigure className={className}>
        <StyledImg src={src} alt={alt}/>
        <StyledCaption title={title} subTitle={subTitle}/>
        {thumbs && <StyledThumbnails thumbs={thumbs}/>}
    </StyledFigure>
);

export default Hero;
