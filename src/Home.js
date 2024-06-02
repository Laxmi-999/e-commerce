import React from "react";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Trusted from "./Trusted";
import Services from "./Services";
import Footer from  "./Footer";
import FeaturedProduct from "./FeaturedProduct";
import styled from "styled-components";


const Home = () =>
{
    const data = {
        name:"Luxxy Store",
    };
    return(
        <>   
                <HeroSection   myData = {data}/>
                <FeaturedProduct />
                <Wrapper>
                    <Services />
                    <Trusted />
                </Wrapper>

        </>
      

        
    );
        
};
const Wrapper = styled.section`

  @media(max-width: ${({theme}) => theme.media.mobile})
  {
    align-items:center;
    justify-content:space-between;
    padding:1rem;
    height:100%;
    width:auto;
    position:absolute;

}`;

export default Home;