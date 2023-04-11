import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./Navbar.js";

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/"> 
        <img src="../Logo.png"/>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/home" activeStyle>
                Home
            </NavLink>
            <NavLink to="/discover" activeStyle>
                Discover
            </NavLink>
            <NavLink to="/categories" activeStyle>
                Categories
            </NavLink>
            <NavLink to="/media" activeStyle>
                Media
            </NavLink>
            <NavLink to="/signup" activeStyle>
                Sign Up
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/login">Sign In</NavBtnLink>
        </NavBtn>
    
      </Nav>
    </>
  );
}

export default Navbar;