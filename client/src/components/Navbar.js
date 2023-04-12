import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #333;
    justify-content: space-between;
    height: 100px;
    display: flex;
    padding: 0.5rem ;
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    `;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

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
    background: #256ce1;    
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
        transition: all 1s ease-in-out;
        background: aliceblue;
        color: black;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
