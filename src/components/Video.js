import React from 'react';
import styled from 'styled-components';
import Caption from './Caption';

const StyledFigure = styled.figure`
    margin: 0;
`;

const StyledVideo = styled.video`
    width: 100%;    
    border: 1px solid var(--drk-blue);
`;

const StyledCaption = styled(Caption)`
    margin-left: 0.2rem;
    padding: 0.5rem 0;    
    border-bottom: 1px solid var(--drk-blue);
`;

const Video = ({src, preload='none', playsinline=true, poster, title, subTitle}) => (
    <StyledFigure>
        <StyledVideo src={src} preload={preload} playsinline={playsinline} poster={poster}>
            No browser support text here...
        </StyledVideo>
        {title && <StyledCaption title={title} subTitle={subTitle} />}
    </StyledFigure>
);

export default Video;
