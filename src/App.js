import React, { Component } from 'react';
import './App.css';

import Caption from './components/Caption';
import Header from './components/Header';
import Heading from './components/Heading';
import Hero from './components/Hero';
import Thumbnails from './components/Thumbnails';
import Video from './components/Video';
import VideoTeaser from './components/VideoTeaser';

const thumbs = [
  {
    src: 'https://via.placeholder.com/40x35',
    alt: 'Hero thumb alt text'
  },
  {
    src: 'https://via.placeholder.com/40x35',
    alt: 'Hero thumb alt text'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Caption title="Title for the caption of an image or title, etc." subTitle="Subtitle for the caption"/>
        <Header title="Title of the section" subTitle="SubTitle" subTitleLevel="6"/>
        <Heading level="2">Sub-heading</Heading>
        <Hero src="https://via.placeholder.com/566x318" alt="Hero alt text" title="Title for the image" subTitle="Caption for the video" thumbs={thumbs}/>
        <Thumbnails thumbs={thumbs}/>
        <Video src="http://media.w3.org/2010/05/sintel/trailer.mp4" preload="none" playsinline="true" poster="https://via.placeholder.com/246x138" title="Video title" subTitle="Video caption for some stuff"/>
        <VideoTeaser src="http://media.w3.org/2010/05/sintel/trailer.mp4" preload="none" playsinline="true" poster="https://via.placeholder.com/125x70" title="Teaser title" subTitle="Teaser subtitle" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, tenetur quaerat saepe esse mollitia dolorum incidunt sit inventore?"/>
      </div>
    );
  }
}

export default App;
