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
          <a href="https://blog.sandiego.org/2023/01/23-new-things-to-see-and-do-in-23/" target="_blank">
        <img  className=" rounded-xl mt-[30px] mr-[30px] hover:scale-75 "src="../SanD.png" alt="San Diego" /> 
        </a>
        <a href="https://blog.sandiego.org/2023/04/top-things-to-do-in-san-diego-apr-11-23-2023/" target="_blank">
        <img className="hover:scale-75 rounded-xl" src="../SanDiegoT.png" alt="San Diego" />
        </a>
        <div className="flex space-x-6 justify-center items-center pr-[15px]">
          <a href="https://blog.sandiego.org/2023/04/miniland-san-diego-is-big-fun-at-legoland/" target="_blank">
        <img className=" mr-[30px] rounded-xl hover:scale-75"src="../Lego.png" alt="Lego" />
        </a>
        <a href="https://blog.sandiego.org/2023/04/spring-clean-your-mind-body-and-spirit-in-san-diego-a-guide-to-recharge-reset-and-declutter-internally/" target="_blank">
        <img className="mt-[30px] mr-[30px] rounded-xl hover:scale-75" src="../Spring.png" alt="Spring" />
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
