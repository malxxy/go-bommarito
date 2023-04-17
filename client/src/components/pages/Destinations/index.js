import React from "react";

import styled from "styled-components";

const Main = styled.main`
background: linear-gradient(to right, rgba(255,0,0,0), rgb(173, 216, 230));
width: 200vh;
height: 107vh;
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

function Destinations() {
    return (
            <Main>
                
        <div className="flex flex-wrap space-x-6 justify-center items-center">
          <a href="https://www.ytravelblog.com/category/destinations/north-america/" target="_blank">
        <img  className=" rounded-xl mt-[30px] mr-[30px] hover:scale-75 w-[500px]"src="../NorthA.png" alt="San Diego" /> 
        </a>
        <a href="https://www.ytravelblog.com/category/destinations/north-america/usa/" target="_blank">
        <img className="hover:scale-75 rounded-xl w-[500px] mt-4" src="../UsaT.png" alt="San Diego" />
        </a>
        <div className="flex space-x-6 justify-center items-center pr-[15px]">
          <a href="https://www.ytravelblog.com/category/destinations/south-america/" target="_blank">
        <img className=" mr-[30px] mt-10 rounded-xl hover:scale-75 w-[500px]"src="../SouthA.png" alt="Lego" />
        </a>
        <a href="https://www.ytravelblog.com/category/destinations/europe/" target="_blank">
        <img className="mt-[30px] mr-[15px] rounded-xl hover:scale-75 w-[500px]" src="../Europe.png" alt="Spring" />
        </a>
        </div>

        </div>
              <Footer> 
              <p>© 2023 GoBommarito. All rights reserved.</p>
              </Footer>
               
            </Main>
    );
    }

    export default Destinations;