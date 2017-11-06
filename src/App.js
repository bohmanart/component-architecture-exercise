import React, { Component } from 'react';
import './App.css';
import ArticleView from './views/ArticleView';
import Aside from './components/Aside';
import Video from './components/Video';
import Heading from './components/Heading';

const ARTICLE = {
  headerTitle: "Title of the section",
  headerSubTitle: "SubTitle",
  // heroSrc: "https://via.placeholder.com/566x318",
  heroSrc: "https://images.unsplash.com/photo-1444123697467-496eaa909980",
  heroAlt: "Hero alt text",
  heroTitle: "Title for the image",
  heroSubTitle: "Caption for the video",
  heroThumbs: [
    {
      src: 'https://via.placeholder.com/40x35',
      alt: 'Hero thumb alt text'
    },
    {
      src: 'https://via.placeholder.com/40x35',
      alt: 'Hero thumb alt text'
    }
  ],
  videoSrc: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  // videoPoster: "https://via.placeholder.com/245x135",
  videoPoster: "https://images.unsplash.com/photo-1422405222494-83330a0a9b0e?dpr=2&auto=format&fit=crop&w=376&h=251&q=60&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  videoTitle: "Video title",
  videoSubTitle: "Video caption for some stuff"
}

class App extends Component {
  render() {
    return (
      <main>
        <ArticleView
          headerTitle={ARTICLE.headerTitle}
          headerSubTitle={ARTICLE.headerSubTitle}
          heroSrc={ARTICLE.heroSrc}
          heroAlt={ARTICLE.heroAlt}
          heroTitle={ARTICLE.heroTitle}
          heroSubTitle={ARTICLE.heroSubTitle}
          heroThumbs={ARTICLE.heroThumbs}
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cum placeat eos labore fugit, voluptatum obcaecati sequi nostrum officia doloribus minima asperiores molestias dolorum reiciendis totam? A eum dolor earum.</p>
          <Aside>
            <Video src={ARTICLE.videoSrc} poster={ARTICLE.videoPoster} title={ARTICLE.videoTitle} subTitle={ARTICLE.videoSubTitle}/>
          </Aside>
          <p>Sequi blanditiis doloribus nisi molestias, tempora quas maxime qui praesentium iste officiis doloremque? Odit, eum excepturi, nisi, libero ratione sit cupiditate a rem adipisci quidem consequatur quis quia ullam vitae?</p>
          <p>Tempora non, iste facilis laudantium obcaecati doloribus odio voluptatem maxime error doloremque dolorem enim nulla, architecto vitae nam repudiandae reiciendis quam necessitatibus similique reprehenderit mollitia corrupti maiores. Consectetur, aut nihil!</p>
          <p>Repellendus quos iusto doloremque odit exercitationem sapiente ea sit at molestiae fugit dolor aut minus ducimus iure, vitae tempora sunt velit laudantium, ut consequatur reprehenderit quisquam possimus assumenda? Aspernatur, asperiores.</p>
          <Heading level="2">Sub-heading</Heading>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, tenetur quaerat saepe esse mollitia dolorum incidunt sit inventore? Ab fuga perferendis impedit autem, fugiat iste saepe dignissimos quisquam quae nihil?</p>
          <p>Facilis, nam commodi autem eius consectetur ea animi, deserunt velit inventore neque voluptatibus itaque modi iusto sapiente. Corporis iste ipsam blanditiis eaque in! A explicabo voluptatum minus ut quis. Enim!</p>
          <p>Eveniet debitis impedit cumque laboriosam hic obcaecati. Nisi placeat illum aperiam culpa eum et repudiandae perspiciatis totam optio. Modi hic reprehenderit sapiente facere? Ex quis fugiat voluptate reprehenderit laboriosam maxime!</p>
          <p>Facilis totam autem id reiciendis illum ipsa earum? Vitae eum quo, a ab explicabo ex voluptatibus nemo suscipit eveniet aliquam dicta asperiores minima iusto itaque ad illum voluptas iure quas!</p>
          <p>Minima rem tempora sed voluptatibus eligendi placeat animi, dignissimos blanditiis voluptas sunt mollitia iste eaque velit, corporis nam! Omnis sapiente iste esse nostrum quam perspiciatis quia rerum saepe ipsum enim!</p>
        </ArticleView>
      </main>
    );
  }
}

export default App;
