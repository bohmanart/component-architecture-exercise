import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Hero from '../components/Hero';
import VideoTeaser from '../components/VideoTeaser';

const StyledArticle = styled.article`
    padding: 1rem;
    @supports not (display: grid) {
        max-width: 50rem;
        margin: 0 auto;
    }

    @media screen and (min-width: 600px) {
        @supports (display: grid) {
            display: grid;
            grid-gap: 1rem;
            grid-template-columns: 1fr repeat(4, minmax(auto, 8.8rem)) 1fr;
            grid-template-areas:
                ". header  header  header  header  ."
                ". hero    hero    hero    hero    ."
                ". content content content .       ."
                ". footer  footer  footer  footer  .";
        }
    }
`;

const StyledHeader = styled(Header)`
    @media screen and (min-width: 600px) {
        @supports (display: grid) {
            grid-area: header;
        }
    }
`;

const StyledHero = styled(Hero)`
    @media screen and (min-width: 600px) {
        @supports (display: grid) {
            grid-area: hero;
            margin-right: 2rem;
        }
    }
`;

const StyledContent = styled.div`
    @media screen and (min-width: 600px) {
        @supports (display: grid) {
            grid-area: content;
        }
    }
`;

const StyledFooter = styled.footer`
    @media screen and (min-width: 600px) {
        @supports (display: grid) {
            grid-area: footer;
        }
    }
`;

const ArticleView = ({
    headerTitle,
    headerSubTitle,
    heroSrc,
    heroAlt,
    heroTitle,
    heroSubTitle,
    heroThumbs,
    children
}) => (
    <StyledArticle>
        <StyledHeader title={headerTitle} subTitle={headerSubTitle} subTitleLevel="6" />
        <StyledHero src={heroSrc} alt={heroAlt} title={heroTitle} subTitle={heroSubTitle} thumbs={heroThumbs}/>
        <StyledContent>{children}</StyledContent>
        <StyledFooter>
            <VideoTeaser src="http://media.w3.org/2010/05/sintel/trailer.mp4" preload="none" playsinline="true" poster="https://via.placeholder.com/125x70" title="Teaser title" subTitle="Teaser subtitle" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, tenetur quaerat saepe esse mollitia dolorum incidunt sit inventore?"/>
            <VideoTeaser src="http://media.w3.org/2010/05/sintel/trailer.mp4" preload="none" playsinline="true" poster="https://via.placeholder.com/125x70" title="Teaser title" subTitle="Teaser subtitle" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, tenetur quaerat saepe esse mollitia dolorum incidunt sit inventore?"/>
        </StyledFooter>
    </StyledArticle>
);

export default ArticleView;
