import React from "react"; 
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({title}) => {
    return (
        <Wrapper>
            <NavLink className = "font-custom" to = "/">Home
            </NavLink>/
            <p className="text-orange-500 text-[2.5rem] font-bold">  {title} </p>
        </Wrapper>

    );
};
const Wrapper = styled.section`
  height: 10rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2.5rem;
  padding-left: 1.2rem;

  a {
    font-size: 2.5rem;
    
  }
`;

export default PageNavigation;