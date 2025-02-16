import React, { useState } from "react";
import styled, { ThemeConsumer } from "styled-components";
import { NavLink } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "./Context/cart_context";

const StyledNav = styled.nav`
.navbar-lists{
        ${'' /* background-color:pink; */}
        display:flex;

        font-size: 3rem;
        gap:4rem;
        list-style-type: none;

        .navbar-link{
            &:link,
            &:visited {
                display: inline-block;
                text-decoration: none;
                font-size: 2.5rem;
                font-weight: 500;
                text-transform: uppercase;
                color: ${({ theme }) => theme.color.black};
                transition: color 0.5s linear; 
            }  
        }

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
        font-size: 3rem;
    }
    .cart-total--item{
        height:2.5rem;
        width: 2.5rem;
        font-size:1.5rem;
        position: absolute;
        background-color: "#000";
        border-radius:50%;
        display: grid;
        place-items: center;
        top:-50%;
        left: 90%;
        background-color: ${({ theme }) => theme.color.helper};
    }
    .mobile-navbar-btn{
        display: none;
        cursor: pointer;
        border: none;
        background-color: white;
    }
    .mobile-nav-icon[name="close-outline"]{
        display: none;
    }
    .close-outline{
        display: none;
    }

    @media(max-width: ${({ theme }) => theme.media.mobile}) {
        background-color:black;
        
        .mobile-navbar-btn {
            display: inline-block;
            z-index: 9999;
            border: ${({ theme }) => theme.color.black};
        
            .mobile-nav-icon {
                font-size: 4.2rem;
                color: ${({ theme }) => theme.color.black};
            }
        }
        .active .mobile-nav-icon {
            display: none;
            font-size: 4.2rem;
            position: absolute;
            top: 30%;
            right: 10%;
            color: ${({ theme }) => theme.color.black};
        }
        .active .close-outline {
            display: inline-block;
            ${'' /* background-color: yellow; */}
        }
        .navbar-lists {
            ${'' /* background-color: pink; */}
            height: 100vh;
            width: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            text:white;
            background-color: #e74c3c;
            border:black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            visibility: hidden;
            
            opacity: 0;
            transform: translateX(100%);
            transition: all 1s linear;

            .navbar-li{
                
            }
        }
       
       
        .active .navbar-lists {
            ${'' /* background-color: pink; */}
            height: 100vh;
            width: 100vh;
            background-color:#e74c3c;
            border:black;
            position: absolute;
            top: 30vh;
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
            z-index: 9999;
            justify-content: center;
            ${'' /* align-items:center; */}
            transform-origin: right;
            transition: all 1s linear;
            ${'' /* background-color: pink; */}

            .navbar-link {
                font-size: 2.5rem;
                ${'' /* background-color: pink; */}
            }
        }
    } 
`;

const Nav = () => {
    const [menuIcons, setMenuIcons] = useState(false);
    const { total_item } = useCartContext();
    const [selectedIndex, setMenuIndex] = useState(0);

    const getComponentStyle = (isActive) => {
        if (isActive) {
            // Apply active component styles
            return {
                color: 'orange',
                textDecoration: 'underline',
                fontSize: '2.5rem'
            };
        } else {
            // Apply other component styles
            return {
                color: 'black',
                fontSize: '2.5rem', // Update the font size as desired
            };
        }
    };

    return (
        <StyledNav>
            <figure>
                {/* <img src='images/Luxxy.png' alt='my-store-logo' /> */}
            </figure>
            <div className={menuIcons ? "navbar active" : "navbar" }>
                <ul className="navbar-lists">
                    <li >
                    <NavLink
                    to="/"
                    className = "navbar-li font-custom"
                    onClick={() => { setMenuIcons(false); setMenuIndex(0); }}
                    style={({ isActive }) => getComponentStyle(isActive)}
                >
                    Home
                </NavLink>
                    </li>
                    <li >
                        <NavLink  to="/about"
                           
                           className = "navbar-li font-custom"  onClick={() => { setMenuIcons(false); setMenuIndex(0); }}
                        style={({ isActive }) => getComponentStyle(isActive)}>About</NavLink>
                    </li>
                    <li >
                        <NavLink  to="/contact"
                           
                           className = "navbar-li font-custom"   onClick={() => { setMenuIcons(false); setMenuIndex(0); }}
                              style={({ isActive }) => getComponentStyle(isActive)} >Contact</NavLink>
                    </li>
                    <li >
                        <NavLink  to="/product"
                           
                           className = "navbar-li font-custom" onClick={() => { setMenuIcons(false); setMenuIndex(0); }}
                            style={({ isActive }) => getComponentStyle(isActive)} >Product</NavLink>
                    </li>
                    <li >
                        <NavLink className="navbar-link nav-li-active trolly--link navbar-li" to="/cart"
                           
                            onClick={() => { setMenuIcons(false); setMenuIndex(0); }}
                             style={({ isActive }) => getComponentStyle(isActive)}
                        >
                            <FiShoppingCart className="cart-trolly" />
                            <span className="cart-total--item">{total_item}</span>
                        </NavLink>
                    </li>
                </ul>

                <div className="mobile-navbar-btn">
                    <CgMenu name="menu-outline" className="mobile-nav-icon text-3xl sm:text-2xl md:text-xl lg:text-lg"
                        onClick={() => setMenuIcons(true)}
                    />
                    <CgClose name="close-outline" className="mobile-nav-icon close-outline text-3xl sm:text-2xl md:text-xl lg:text-lg"
                        onClick={() => setMenuIcons(false)} />
                </div>
            </div>
        </StyledNav>
    );
};

export default Nav;
