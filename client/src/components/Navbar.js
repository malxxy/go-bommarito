import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background: ##f4f4f4;
    justify-content: space-between;
    height: 100px;
    display: flex;
    padding: 0.5rem ;
    z-index: 10;
    border-bottom: 1px solid #e8ecec;
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-left: 20px;
    object-fit: contain;
    @media screen and (max-width: 768px) {
        width: 100%; /* make the logo width 100% for smaller screens */
        height: auto; /* keep the logo aspect ratio */
        position: absolute; /* move the logo to the top left corner */
        top: 0;
        left: 0;
        padding: 10px;
    }
    @media screen and (min-width: 2560px) and (min-height: 1600px){
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px;
    }
`;

export const NavLink = styled(Link)`
  color: #1d1d1d;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  padding: 0;
  margin: 0 1rem;
  width: auto;

  @media screen and (max-width: 768px) {
    margin: 0 0.5rem;
  }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #1d1d1d;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }

    @media screen and (max-width: 400px) {
        transform: translate(-100%, 70%);
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 480px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 5px;
    background: #1d1d1d;    
    padding: 12px 26px; 
    color: #fff;
    font-size: 19px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    position: relative;
    right: 100px;

    &:hover {
        transition: all 0.5s ease-in-out;
        background: #e8ecec;
        color: black;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
