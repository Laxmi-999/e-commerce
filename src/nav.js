import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import { NavLink } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";

const StyledNav = styled.nav`
.navbar-lists{
        ${'' /* background-color:pink; */}
        display:flex;

        font-size: 3rem;
        gap:4rem;
        list-style-type: none;


        .navbar-link{
            &:link,
            &:visited
            {
        display: inline-block;
        
        text-decoration:none;
        font-size: 2.5rem;
        font-weight: 500;
        text-transformation: Uppercase;
        color: ${({theme}) => theme.color.black };
        transition:  Color 0.5s  linear; 
    }  
 } 


        .
        ${'' /* visibility: visible;
        justify-content: center;
        align-items: center;
        opacity:1;
        transform: translateX(0);
        z-index: 999;
        transition: all 3s linear;
        transform-origin:right;
        list-style-type: none; */}

    }
    .trolly--link{
        position: relative;
    }
    .cart-trolly{
        position: relative;
        font-size: 2rem;
    }
    .cart-total--item{
        height:2.5rem;
        width: 2.5rem;
        position: absolute;
        background-color: "#000";
        border-radius:50%;
        display: grid;
        place-items: center;
        top:-50%;
        left: 90%;
        background-color: ${({theme}) => theme.color.helper};
    }
    .mobile-navbar-btn{
        display: none;
        cursor: pointer;
        border: none;
        background-color: white;
    }
    .mobile-nav-icon[ name= "close-outline"]{
        display: none;
    }
    .close-outline{
        display: none;
    }



    @media(max-width: ${({theme}) => theme.media.mobile})
    {
        .mobile-navbar-btn
        {
            display: inline-block;
            z-index: 9999;
            border: ${({ theme}) => theme.color.black};
        
        .mobile-nav-icon{
            font-size: 4.2rem;
            color: ${({ theme}) => theme.color.black};
        }
        }   
        .active .mobile-nav-icon{
            display: none;
            font-size:4.2rem;
            positon:absolute;
            top:30%;
            right:10%;
            color: ${({ theme}) => theme.color.black};
        }
        .active .close-outline{
            display: inline-block;
            ${'' /* background-color: yellow; */}

        }
        .navbar-lists{
            ${'' /* background-color: pink; */}
            height: 100vh;
            width: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            background-color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-item: center;
            visibility: hidden;
            opacity: 0;
            transform: translateX(100%);
            transition: all 3s linear;
        }
       
        .active .navbar-lists{
            ${'' /* background-color: pink; */}
            height: 100vh;
            width: 100vh;
            background-color: transparent;
            position: absolute;
            top: 30vh;
            visibility:visible;
            opacity:1;
            transform: translateX(0);
            z-index: 9999;
            justify-content:center;
            ${'' /* align-items:center; */}
            transform-origin: right;
            transition: all 3s linear;
            ${'' /* background-color: pink; */}


            .navbar-link{
                font-size:2.5rem;
                ${'' /* background-color: pink; */}
            }
        }
    } 
    
    `;

const Nav = () =>
{
    const[menuIcons, setMenuIcons] = useState();

    return(
        <StyledNav>
         <figure>
        {/* <img  src = 'images/Luxxy.png' alt = 'my-store-logo' /> */}
        </figure>
          <div className ={menuIcons ? "navbar active" : "navbar"}>
             <ul className="navbar-lists">
                <li>
                  <NavLink  className= "navbar-link" to= "/"
                  onClick = {() => setMenuIcons(false)}>Home</NavLink>
                 </li>
                 <li>
                  <NavLink  className= "navbar-link"  to= "/about"
                  onClick = {() => setMenuIcons(false)}>About</NavLink>
                 </li>
                 <li>
                  <NavLink  className= "navbar-link" to= "/contact"
                  onClick = {() => setMenuIcons(false)}>Contact</NavLink>
                 </li>
                 <li>
                  <NavLink  className= "navbar-link" to= "/product"
                 onClick = {() => setMenuIcons(false)}>Product</NavLink>
                 </li>
                 <li>
                  <NavLink  className= "navbar-link trolly--link" to= "/cart"
                  onClick = {() => setMenuIcons(false)}
                  >
                  <FiShoppingCart className = "cart=trolly"/>
                  <span className="cart-total--item">15</span>

                  </NavLink>
                 </li>
                </ul>

                <div className="mobile-navbar-btn">
                <CgMenu  name = "menu-outline" className = "mobile-nav-icon" 
                    onClick = {() => setMenuIcons(true)}
                />
                <CgClose name = "close-outline" className = "mobile-nav-icon close-outline"
                onClick = {() => setMenuIcons(false)} />

                </div>
            </div>
        </StyledNav>
   
    );

};
export default Nav;