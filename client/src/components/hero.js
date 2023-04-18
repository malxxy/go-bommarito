import React from "react";
import styled from "styled-components";

const Main = styled.main`
  background: linear-gradient(to right, rgba(255, 0, 0, 0), rgb(173, 216, 230));
`;

const Content = styled.div``;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: grey;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  font-weight: 200;
  line-height: 1.5;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 150px;
  padding-left: 150px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding-right: 10px;
    padding-left: 10px;
  }
  @media screen and (min-width: 2560px) and (min-height: 1600px){
    font-size: 40px;
    margin-right: 20px;
    margin-left: 30px;
  }
`;

const About = styled.p`
  font-size: 24px;
  font-weight: 200;
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 150px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    flex-direction: column;
    align-items: center;
    padding-left: 0px;
  }
`;

const Aside = styled.p`
  font-size: 24px;
  font-weight: 200;
  line-height: 1.5;
  position: relative;
  top: -300px;
  padding-right: 800px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    position: static;
    top: 0;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

const Img = styled.img`
  width: 120rem;
  height: 30rem;
  border-radius: 17px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Image = styled.img`
  width: 35%;
  height: 30%;
  border-radius: 17px;
  position: relative;
  right: 10%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    right: 0%;
  }
`;

const Images = styled.img`
  width: 40%;
  height: 30%;
  border-radius: 17px;
  position: relative;
  left: 30%;
  top: 150px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    left: 0%;
    top: 0px;
  }
`;
        const Footer = styled.p`
        border: 1px solid black;
        border-radius: 17px;
        width: 170vh;
        font-size: 24px;
        font-weight: 200;
        line-height: 1.5;
        color: white;
        background-color: #333;
        text-align: center;
        `
    
function Hero() {
  return (
   <Main>
          <Img src="../homeHero.png" alt="surfer's sanctuary by bommarito art"/>
    <Content>
        <Title>
            <h1>GoBommarito</h1>
             <Desc>
        <p> GoBommarito brings people and places together with the recommendations and guides of the Bommarito Brothers - Jeff Bommarito, and brother Daniel Bommarito. They share their experiences with the most interesting and impactful people, places, events, and all things culture from dining to the arts
Based in San Diego, California - GoBommarito serves its audience by sharing the best of people and places experiences from around the world by featuring publications from their adventures and that of their partners based in exciting locations from Hong Kong to Shanghai, Sidney to Bali, the Middle East, and throughout the Americas
Join the Bommarito Brothers and go explore the world!
</p>
                 <About>
                <Image src="../Nature.png" alt="stock image"/>
                <p>Daniel Bommarito #1 Most Awarded Fine Art Photographer in San Diego, San Diego Fine Art Photography, Ocean Wave Art. San Diego Art Prints and Ocean Art Gallery. Explore the past 25 years combined between Artist, Daniel Bommarito and brother Jeff Bommarito. Visit the Bommarito Art Studio 5 minutes from Downtown San Diego. Award winning San Diego Art Prints, San Diego Metal Art, San Diego Acrylic Art, San Diego Canvas Art. San Diego Art Prints, San Diego Landscape Photos, San Diego Landscape Photography, Bommarito Art Ocean Art Gallery, Daniel Bommarito Artist . Explore more: Bommarito Golf, Bommarito Foundation, Bommarito Ventures, Bommarito Media Co. Contact to learn more about San Diego Art Prints, San Diego Landscape Art, San Diego Landscape Photo Art. </p>
              </About>
              <Images src="../Screenshot.png" alt="stock image"/>
              <Aside>
                <p>
                Each year Daniel selects a small number of people to work with
Personal instruction and coaching from the best in any field is the proven way of accelerating your improvement, saving time, and enjoying it more With the Bommarito experience, you'll get an exclusive look at what makes Daniel a master in the field of art making and photography while being personally coached in a way that best suites your goals.
                </p>
              </Aside>
              <Footer> 
              <p>© 2023 GoBommarito. All rights reserved.</p>
              </Footer>
           </Desc>
        </Title>
    </Content>
   </Main>
  );
}
export default Hero;