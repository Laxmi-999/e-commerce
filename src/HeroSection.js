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
            <p className="intro-data md:text-xl font-custom sm:text-base">welcome to</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-custom">{name}</h1>
            <p className="mt-4 text-base sm:text-lg md:text-[1.5rem] font-custom text-justify">
            Welcome to our Electronics Store, where innovation meets excellence! Discover a curated collection of cutting-edge gadgets—from sleek smartphones and high-performance laptops to immersive audio systems and smart home devices—that are designed to transform your digital lifestyle. Whether you're upgrading your tech for work, play, or everyday convenience, our thoughtfully selected electronics empower you to stay connected, entertained, and ahead of the curve.
            </p>
            <NavLink to="/shop">
                <button className="mt-6 font-custom px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                    Shop Now
                </button>
            </NavLink>
        </div>
        <div className="hero-section-image">
            <figure>
                <img src="https://media.istockphoto.com/id/525491138/photo/man-shopping-at-a-tech-store.jpg?s=612x612&w=0&k=20&c=SS0N046l1pGQFqDH8pkBU99E1bpUJaxPhjBbaDJK16k=" alt="hero-image" className="w-full h-auto rounded shadow-lg" />
            </figure>
        </div>
    </div>
</div>


 </Wrapper>
    );

};
export default HeroSection;

