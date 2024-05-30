import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Styles/Button";
import styled from "styled-components";


const HeroSection = ({ myData }) =>{
   const {name}=myData; 

    const Wrapper = styled.section`
    padding:0;
    background-color: ${({ theme})=> theme.color.white};
    margin-top:5%;

    .img{
        min-width:10rem;
        height:10rem;
    }
    .hero-section-data{
        p{
       margin: 2rem 0;
        }
        h1{
            text-transform: capitalize;
            font-weight:bold;
        }
        .intro-data{
            margin-bottom:0;

        }

    }
    
    .grid{
        ${'' /* background-color:pink; */}

        .grid-two-column{
            height:100%;
            width:70%;
        }
    }
   .hero-section-image{
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;

    figure{
        position:relative;

       &::after{
        content:"";
        height:80%;
        width:60%;
        background-color:rgba(81, 56, 241, 0.4);
        left:50%;
        top:-5rem;
        z-index:-1;
       }
    }
    .hero-img{
        height:auto;
        width:100%;
    }
    @media(max-width: ${({ theme}) => theme.media.mobile}){
        .container{
            margin-top:20vh;

        }
        .grid{
            gap:10rem;
            
        }
    

        figure::after
        {
            content:"";
            height:auto;
            width:50%;
            background-color:rgba(81, 56, 241, 0.4);
            left:0;
       }
    }
 }


    `;
    return(

     <Wrapper>
       <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="hero-section-data">
            <p className="intro-data text-sm sm:text-base">welcome to</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{name}</h1>
            <p className="mt-4 text-base sm:text-lg">
                If you've followed these steps and are still facing issues accessing 
                the public folder in your React project, please provide more details about
                your setup, error messages, or any specific problems you're encountering so 
                that I can assist you further.
            </p>
            <NavLink to="/shop">
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                    Shop Now
                </button>
            </NavLink>
        </div>
        <div className="hero-section-image">
            <figure>
                <img src="images/hero-img.jpg" alt="hero-image" className="w-full h-auto rounded shadow-lg" />
            </figure>
        </div>
    </div>
</div>


 </Wrapper>
    );

};
export default HeroSection;

