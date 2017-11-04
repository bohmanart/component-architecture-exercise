import React from 'react';
import styled from 'styled-components';
import Caption from './Caption';

const Video = ({src, preload='none', playsinline=true, poster, title, subTitle}) => (
    <figure>
        <video src={src} preload={preload} playsinline={playsinline} poster={poster}>
            No browser support text here...
        </video>
        {title && <Caption title={title} subTitle={subTitle} />}
    </figure>
);

export default Video;
