import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Video from './Video';

const StyledSection = styled.section`
    display: flex;
`;

const StyledDiv = styled.div`
    flex: 1;
    margin-left: 1rem;
`;

const VideoTeaser = ({src, preload, playsinline, poster, title, subTitle, desc}) => (
    <StyledSection>
        <Video src={src} preload={preload} playsinline={playsinline} poster={poster}/>
        <StyledDiv>
            <Header title={title} subTitle={subTitle} subTitleLevel='5'/>
            {desc && <p>{desc}</p>}
        </StyledDiv>
    </StyledSection>
);

export default VideoTeaser;
