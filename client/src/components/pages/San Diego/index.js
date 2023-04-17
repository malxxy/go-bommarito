import React from "react";
import styled from "styled-components";

const Main = styled.main`
  background: linear-gradient(to right, rgba(255,0,0,0), rgb(173, 216, 230));
  width: 200vh;
  height: 100vh;

  /* Media query for screens smaller than 768px */
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;

    @media (min-width: 1024px) {
      width: 100%;
      height: 100%;
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
  margin-left: 150px;
  margin-top: 95px;

  /* Media query for screens smaller than 768px */
  @media (max-width: 767px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Image = styled.img`
  /* Common styles for all images */
  border-radius: 10px;
  &:hover {
    transform: scale(1.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  }

  /* Media query for screens smaller than 768px */
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 20px;
    margin-right: 0;
  }
`;

function Categories() {
  return (
    <Main>
      <div className="flex flex-wrap space-x-6 justify-center items-center">
        <a href="https://blog.sandiego.org/2023/01/23-new-things-to-see-and-do-in-23/" target="_blank">
          <Image className="rounded-xl mt-[30px] mr-[30px] " src="../SanD.png" alt="San Diego" />
        </a>
        <a href="https://blog.sandiego.org/2023/04/top-things-to-do-in-san-diego-apr-11-23-2023/" target="_blank">
          <Image className=" rounded-xl" src="../SanDiegoT.png" alt="San Diego" />
        </a>
        <div className="flex space-x-6 justify-center items-center pr-[15px]">
          <a href="https://blog.sandiego.org/2023/04/miniland-san-diego-is-big-fun-at-legoland/" target="_blank">
            <Image className="mr-[30px] rounded-xl " src="../Lego.png" alt="Lego" />
          </a>
          <a href="https://blog.sandiego.org/2023/04/spring-clean-your-mind-body-and-spirit-in-san-diego-a-guide-to-recharge-reset-and-declutter-internally/" target="_blank">
            <Image className="mt-[30px] mr-[30px] rounded-xl " src="../Spring.png" alt="Spring" />
          </a>
        </div>
      </div>
      <Footer> 
        <p>© 2023 GoBommarito. All rights reserved.</p>
      </Footer>
    </Main>
  );
}

export default Categories;
