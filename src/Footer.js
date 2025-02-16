import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./Styles/Button";
import { FaDiscord,FaYoutube,FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaFacebook, FaSquareTwitter } from "react-icons/fa6";


const Footer = () => {

 return(
<>
        <Wrapper className="wrapper">
            <div className=" contact-short">
            <div className="grid  grid-two-columns mt-[3rem]">
                <div className="heading-txt" >
                    <h3 className="font-custom text-[1.5rem">Ready to get started?</h3>
                    <h3 className="font-custom">Talk to us today</h3>
                </div>
                <div className="btn-div">
                    <Button className="btn">
                        <NavLink to ="/contact" className="btn-txt font-custom">Get started</NavLink>
                    </Button>
                </div>

            </div>
            </div>
        
        {/* main footer */}
        <footer className="footer mt-[2rem]">
            <div className="footer-container grid grid-four-columns">
            <div className="footer_about">
                <h3 className="font-custom">Luxxy Store</h3>
                <p className="font-custom text-[1.9rem"> Lorem Ipsum is simply 
                sample text for the developers
                and desingers.</p>
            </div>
            <div className="footer_Subscribe">
                <h3 className="font-custom">Subscribe to get updates:</h3>
                <input  type = "email" placeholder="your email"/>
                <input type = "submit" value = "Subscribe"/>
            </div>
            <div className=" footer_follow">
                <h3 className="font-custom">Follow Us:</h3>
            <div className="social_icons ">
                    <div className="flex ">
                        <FaDiscord className = "icons mr-[1rem]"/>
                        <FaInstagram className = "icons mr-[1rem]"/>
                        <a href = "https://youtu.be/Rtapgrl7A5Y?si=RuoeywWrjDK_2rgC"
                        target = "_blank">
                        <FaYoutube className = "icons"/>
                        </a>
                    </div>
                    <div className="flex ">
                         <FaLinkedin className = "icons mr-[1rem]" />
                         <FaSquareTwitter className="icons mr-[1rem]" />
                         <FaFacebook className = "icons"/>
                    </div>
            
                </div>
            </div>  


            <div className="footer_contact">
                <h3 className="font-custom"> contact Us:</h3>
                {/* <a href = "tel:9824543632">9824543632</a> */}
                <p className="font-custom font-normal text-[1.9rem"> 9824543632</p>
                <p className="font-custom text-[1.9rem]"> Bharatpur-10,Chitwan</p>

                
            </div>
            </div>
            {/* bottom-footer */}
            <div className = "bottom-footer-section">
            <hr className="mt-[6rem]" />
            <div className="container grid grid-two-columns">
            <p className="font-custom text-[1.5rem">@{new Date().getFullYear()} LuxxyStore  All Right Reserve</p>

            <div>
                <p className="font-custom text-[1.5rem">Privacy Policy</p>
                <p className="font-custom text-[1.5rem"> Terms And Conditions:</p>
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
    padding:0;
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
    width:100%;
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme}) => theme.color.footer_bg};
}
.footer-container{
    background-color:${({ theme}) => theme.color.footer_bg};
    ${'' /* background-color:yellow; */}
    height:auto;
    justify-self:center;
    justify-content:center;
    align:center;
    items:center;
    margin-left:auto;
    margin-right:auto;
    max-width:auto;
    padding: auto;
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
    display:inline-grid;
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



@media(max-width:1024px)
{
    .contact-short
    {
    margin:auto;
    max-width:auto;
    padding:0;

    .btn-div{
        height:auto;
        width:auto;
        margin:auto;

        .btn{
            padding:1rem;

            .btn-txt{
                font-size:1rem;
            }
        }
    }
    }

   .grid{
    margin-left:auto;
    margin-right:auto;
    padding:auto;
    h3{
        font-size:1.5rem;
        font-weight:bold;

    }
   }
   .footer-container{
    background-color:${({ theme}) => theme.color.footer_bg};
    margin: 0;
    max-width:auto;
    padding:1rem;
    border-radius:2rem;
    justify-content:first;
    
    h3{
        color: ${({ theme}) => theme.color.hr};
        margin-bottom:2rem;
        font-size:1.5rem;
    }
    p{
        color:white;
        font-size:1rem;
        width:20vh;
    }
}
.footer_Subscribe{
    display:grid;
    gap:1rem;

    input, textarea{
    max-width: 40rem;
    padding: 1rem 1.5rem;
    font-size: 1rem;

}

.input[type="submit"]
{
    max-width: 8rem;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    }
}
}


@media(max-width: 768px)

{
   position:relative;
   justify-self:center;
   align-self:center;
     
   .grid{
    height:auto;
    padding:3rem;
    display:flex;
    flex-direction:column;
    grid-template-columns: 1fr 1.2fr .5fr .8fr ;
    justify-content:space-between;
    gap:8rem;
    aling-self:center;
    ${'' /* background-color: ${({ theme}) => theme.color.bg}; */}
}
   
   .contact-short{
    
    margin:0;
    padding:0;
    padding: 0.5rem;
    border-radius:2rem;

    .grid{
        display:flex;
        flex-direction:row;
        justify-content:space-between;

        .btn-div{
        height:auto;
        width:auto;
        margin:auto;

        .btn{
            padding:1.5rem;


            .btn-txt{
                font-size:1rem;
            }
        }
    }
    }

    .heading-txt{
        display:inline-flex;

    }

    h3{
        font-size:1rem;
    }
    .btn-div{
        height:auto;

        .btn{
             display:inline-flex;
             justify-content:center;
             align-items:center;
              height:2vh;
              width:auto;

            .btn-txt{
                font-size:0.5rem;
            }
        }
    }
    .footer{
 
     .footer-container{
     }
    
   }
}
}
    
`;
export default Footer;