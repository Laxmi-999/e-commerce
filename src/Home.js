import React from "react";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Trusted from "./Trusted";
import Services from "./Services";
import Footer from  "./Footer";
import FeaturedProduct from "./FeaturedProduct";

const Home = () =>
{
    const data = {
        name:"Luxxy Store",
    };
    return(
        <>   
                <HeroSection  myData = {data}/>
                <FeaturedProduct />
                <Services />
                <Trusted />
                

        </>
      

        
    );
        
};

export default Home;