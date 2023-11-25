import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./Styles/Button";
import { FaDiscord,FaYoutube,FaInstagram } from "react-icons/fa";


const Footer = () => {

 return(
<>
        <Wrapper>
        <secction>
            <div className=" contact-short">
            <div className="grid grid-two-columns">
                <div >
                    <h3>Ready to get started?</h3>
                    <h3>Talk to us today</h3>
                </div>
                <div>
                    <Button>
                        <NavLink to ="/contact">Get started</NavLink>
                    </Button>
                </div>

            </div>
            </div>
        </secction>
        
        {/* main footer */}
        <footer className="footer">
            <div className="footer-container grid grid-four-columns">
            <div className="footer_about">
                <h3> Luxxy Store</h3>
                <p> Lorem Ipsum is simply 
                sample text for the developers
                and desingers.</p>
            </div>
            <div className="footer_Subscribe">
                <h3>Subscribe to get updates</h3>
                <input  type = "email" placeholder="your email"/>
                <input type = "submit" value = "Subscribe"/>
            </div>
            <div className=" footer_follow">
                <h3>Follow Us</h3>
            <div className="social_icons">
                    <div >
                        <FaDiscord className = "icons"/>
                        </div>
                        <div >
                        <FaInstagram className = "icons"/>
                        </div>
                        <div >
                        <a href = "https://youtu.be/Rtapgrl7A5Y?si=RuoeywWrjDK_2rgC"
                        target = "_blank">
                        <FaYoutube className = "icons"/>
                        </a>
                        </div>
                    </div>
            </div>
            <div className="footer_contact">
                <h3> contact Us</h3>
                {/* <a href = "tel:9824543632">9824543632</a> */}
                <h3> 9824543632</h3>
            </div>
            </div>
            {/* bottom-footer */}
            <div className = "bottom-footer-section">
            <hr />
            <div className="container grid grid-two-columns">
            <p>@{new Date().getFullYear()} LuxxyStore  All Right Reserve</p>

            <div>
                <p>Privacy Policy</p>
                <p> Terms And Conditions</p>
            </div>
            </div>
            </div>
        
        </footer>
    </Wrapper>
</>
);}
const Wrapper = styled.section`
${'' /* margin-bottom:10%; */}

.contact-short{
    ${'' /* padding:auto; */}
    margin:auto;
    max-width:50vw;
    padding: 5rem 10rem;
    border-radius:2rem;
    background-color: ${({ theme }) => theme.color.bg};
    box-shadow: ${({ theme}) => theme.color.shadowSupport};
    transform: translateY(50%);
    
}
.grid{
    height:auto;
    padding:3rem;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    aling-self:center;
    ${'' /* background-color: ${({ theme}) => theme.color.bg}; */}

    h3{
        font-size:2rem;
        font-weight:bold;

    }
}
.footer{
    ${'' /* height:80vh; */}
    width:100%;
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme}) => theme.color.footer_bg};
}
.footer-container{
    background-color:${({ theme}) => theme.color.footer_bg};
    ${'' /* background-color:white; */}
    height:auto;
    justify-self:center;
    margin:auto;
    max-width:50vw;
    padding: 5rem 10rem;
    border-radius:2rem;
    justify-content:space-between;
    
    h3{
        color: ${({ theme}) => theme.color.hr};
        margin-bottom:2.5rem;
        font-size:2.5rem;
    }
    p{
        color:white;
        font-size:1.5rem;
        width:20vh;
    }
}
.footer_Subscribe{
    display:grid;
    gap:1rem;
}
.social_icons{
    display:inline-flex;
    gap:2rem;

    .icons{
    font-size:3.5rem;
    color:white;
}
}
.container{
    background-color: ${({ theme}) => theme.color.footer};

    p{
        color:white;
        font-size:1.5rem;
    }
}

`;
export default Footer;