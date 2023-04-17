import React from "react";

import styled from "styled-components";

const Main = styled.main`
background: linear-gradient(to right, rgba(255,0,0,0), rgb(173, 216, 230));
width: 200vh;
height: 147vh;
@media screen and (max-width: 400px) {
    transform: translate(-100%, 70%);
}
}
`
const Footer = styled.footer`
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
@media (max-width: 768px, max-height: 1024px ) {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
    border-radius: 0;
}
`

function FoodDrink() {
    return (
            <Main>
                
        <div className="flex flex-wrap space-x-6 justify-center items-center">
          <a href="https://mikcexplore.com/home/2023/3/6/recipe-smokey-bbq-kebabs" target="_blank">
        <img  className=" rounded-xl mt-[30px] mr-[30px] w-[500px] hover:scale-75  "src="../Smoke.png" alt="Smoked" /> 
        </a>
        <a href="https://mikcexplore.com/home/2023/2/13/profile-voo-lounge" target="_blank">
        <img className="hover:scale-75 rounded-xl w-[500px]" src="../Drink.png" alt="Drink" />
        </a>
        <div className="flex space-x-6 justify-center items-center pr-[15px]">
          <a href="https://mikcexplore.com/home/2022/11/15/acre-restaurant" target="_blank">
        <img className=" mr-[30px] rounded-xl hover:scale-75 w-[500px]"src="../Salad.png" alt="Lego" />
        </a>
        <a href="https://mikcexplore.com/home/2023/1/4/chef-michael-smith-cookbook" target="_blank">
        <img className="mt-[30px] mr-[30px] rounded-xl hover:scale-75 w-[500px]" src="../Noclue.png" alt="Spring" />
        </a>
        </div>

        </div>
              <Footer> 
              <p>© 2023 GoBommarito. All rights reserved.</p>
              </Footer>
               
            </Main>
    );
    }

    export default FoodDrink;