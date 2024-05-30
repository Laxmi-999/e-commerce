import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./nav.js";
import Luxxy from "."
import { GlobalStyle } from "./GlobalStyle.js";

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.color.bg};
  display: flex;
  justify-content: flex-end;
  align-items: center; /* Note the correct property name here */
  position: relative;

  .logo{
    position:absolute;
    justify-content:center;
    align-self:center;
    background-color: pink;
    height: 7rem;
    width: auto;
    ${'' /* background-color:pink; */}
    left: 2%;
    top: 1.5rem;
    ${'' /* margin-top:1%; */}
    ${'' /* margin-bottom:1%; */}
    ${'' /* padding-top:3px; */}
  };
`;
const Header = () => {
  return (
    <MainHeader>
    <GlobalStyle />
      <figure>
            <img  className= 'logo'src ='images/Luxxy.png' alt = 'my-logo-img'/>
       </figure>
      <Nav />
    </MainHeader>
  );
};

export default Header;
