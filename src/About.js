import React from "react";
import HeroSection from "./HeroSection";
import { createContext } from "react";
import { AppContext } from "./Context/ProductContex";
import { useContext } from "react";
import { useProductContext } from "./Context/ProductContex";

const About = () =>
{

    
    const { MyName } = useProductContext;

    const data = {
        name:"Luxxy Ecommerce",
    };
    return(
        <>
         {MyName}
        <HeroSection  myData={data}/>
        </>
    );
}
export default About;