import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./Navbar.js";

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/"> 
        <img className="w-[300px]"src="../Logo.png" alt="logo"/>
        </NavLink>
        <Bars />
        <NavMenu>
            {/* <NavLink to="/home" activeStyle>
                Home
            </NavLink> */}
            <NavLink to="/discover" activeStyle>
                Discover
            </NavLink>
            <NavLink to="/San Diego " activeStyle>
              San Diego
            </NavLink>
            <NavLink to="/FoodDrink" activeStyle>
            Food + Drink
            </NavLink>
            <NavLink to="/Lifestyle" activeStyle>
            Lifestyle
            </NavLink>
            <NavLink to="/Destinations" activeStyle>
            Destinations
            </NavLink>
            <NavLink to="/Sports" activeStyle>
            Sports
            </NavLink>
            <NavLink to="/People" activeStyle>
            People
            </NavLink>
            <NavLink to="/ArtCulture" activeStyle>
            Art+Culture
            </NavLink>
            <NavLink to="/signup" activeStyle>
                Sign Up
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}

export default Navbar;