import React from "react";
import styled from "styled-components";

const Main = styled.main`
  background: linear-gradient(to right, rgba(255,0,0,0), rgb(173, 216, 230));
  width: 200vh;
  height: 152.5vh;

  /* Media query for screens smaller than 768px */
  @media (max-width: 767px) {
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

  @media (max-width: 767px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const FoodDrinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


const FoodDrinkImage = styled.img`
  margin: 30px;
  width: 500px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    margin: 10px;
    width: 80%;
  }
`;

const FoodDrink = () => {
  return (
    <Main>
      <FoodDrinkWrapper>
        <a href="https://mikcexplore.com/home/2023/3/6/recipe-smokey-bbq-kebabs" target="_blank">
          <FoodDrinkImage src="../Smoke.png" alt="Smoked" />
        </a>
        <a href="https://mikcexplore.com/home/2023/2/13/profile-voo-lounge" target="_blank">
          <FoodDrinkImage src="../Drink.png" alt="Drink" />
        </a>
        <div className="flex space-x-6 justify-center items-center pr-[15px]">
          <a href="https://mikcexplore.com/home/2022/11/15/acre-restaurant" target="_blank">
            <FoodDrinkImage src="../Salad.png" alt="Lego" />
          </a>
          <a href="https://mikcexplore.com/home/2023/1/4/chef-michael-smith-cookbook" target="_blank">
            <FoodDrinkImage src="../Noclue.png" alt="Spring" />
          </a>
        </div>
      </FoodDrinkWrapper>
      <Footer>
        <p>© 2023 GoBommarito. All rights reserved.</p>
      </Footer>
    </Main>
  );
};

export default FoodDrink