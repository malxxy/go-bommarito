import React from "react";
// import SanD from "../SanD.png";
import styled from "styled-components";

const Main = styled.main`
background: linear-gradient(to right, rgba(255,0,0,0), rgb(173, 216, 230));
width: 200vh;
height: 100vh;
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
`

function Categories() {
    return (
            <Main>
                
        <div className="flex flex-wrap space-x-6 justify-center items-center">
        <img  className=" rounded-xl mt-[30px] mr-[30px] hover:scale-75 "src="../SanD.png" alt="San Diego" /> 
        <img className="hover:scale-75 rounded-xl" src="../SanDiegoT.png" alt="San Diego" />
        <div className="flex space-x-6 justify-center items-center pr-[15px]">
        <img className=" mr-[30px] rounded-xl hover:scale-75"src="../Lego.png" alt="Lego" />
        <img className="mt-[30px] mr-[30px] rounded-xl hover:scale-75" src="../Spring.png" alt="Spring" />
        </div>

        </div>
              <Footer> 
              <p>© 2023 GoBommarito. All rights reserved.</p>
              </Footer>
               
            </Main>
    );
    }

   export default Categories;
