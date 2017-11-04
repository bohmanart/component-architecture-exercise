import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Video from './Video';

const VideoTeaser = ({src, preload, playsinline, poster, title, subTitle, desc}) => (
    <section>
        <Header title={title} subTitle={subTitle} subTitleLevel='3'/>
        <Video src={src} preload={preload} playsinline={playsinline} poster={poster}/>
        {desc && <p>{desc}</p>}
    </section>
);

export default VideoTeaser;
