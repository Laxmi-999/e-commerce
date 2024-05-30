import React from "react";
import styled from "styled-components";

const Contact = () =>
{
    return(
        <Wrapper>
           <h2 className="contact-heading">Contact Us</h2>
           <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466693.1287910362!2d84.23669836210262!3d27.589431919383987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb37e078d531%3A0x973f22922ea702f7!2sBharatpur%2044200!5e0!3m2!1sen!2snp!4v1697188825607!5m2!1sen!2snp" 
                width="100%"
                height="600" 
                style={{border:0}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <div className="container">
            <div className="contact-form">
                <form  className = "contact-input" action= "https://formspree.io/f/xoqoylll"  method = "POST">
                    <input type = "text" placeholder="enter your name" name = "UserName" required  autoComplete="off"/>
                    <input type = "email" placeholder="enter your email" name = "email" required  autoComplete="off"/>
                    <textarea type = "text" placeholder="type your messag" cols ="30" rows = "10"
                    name = "Message" required  autoComplete="off"></textarea>
                    <input type = "submit" value = "send" className="rounded-[1rem] send-btn " />
                </form>
            </div>
          </div>
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
background-color:${({ theme}) => theme.color.white};
justify-self:center;
aling-content:center;

${'' /* padding:5rem; */}

.contact-heading{
    text-align:center;
    justify-content:center;
    font-weight:bold;
    margin-top:5rem;
    margin-bottom:5rem;

}
.container{
    margin-top:5rem;
    ${'' /* background-color:pink; */}
    padding-left:0;
    background-color: ${({ theme}) => theme.color.white};
    height:auto;
    width:auto;
    align-self:center;
    ${'' /* position:relative; */}
    ${'' /* margin-left:0; */}
    justify-self:center;
    align-items:center;
}
.contact-form{
    ${'' /* height:auto; */}
    ${'' /* width:fit-content; */}
     ${'' /* justify-content:center;
     align-items:center;
     padding-right:0; */}
     ${'' /* background-color:blue; */}
}
.contact-input{
    height:auto;
    width:auto;
    margin-left:30rem;
    margin-right:30rem;
    postion:absolute;
    background-color: ${({ theme}) => theme.color.bg}; 
    padding:5rem;
    display:flex;
    flex-direction:column;
    gap:3rem;
    ${'' /* padding-left:0; */}
    ${'' /* padding-right:10rem; */}





    @media (max-width: 768px) {
      margin-left: 5rem;
      margin-right: 5rem;
      padding: 3rem;

      .contact-heading{
        font-size:2rem;
      }


      .send-btn{
      height:auto;
      width:20vh;
      font-size:1rem;
      font-color:white;
      padding:1rem;
    }
    }

    @media (max-width: 480px) {
      margin-left: 2rem;
      margin-right: 2rem;
      padding: 2rem;

      .contact-heading{
        font-size:2rem;
      }


      .send-btn{
      height:auto;
      width:10vh;
      font-size:1rem;
      font-color:white;
      padding:1rem;
    }
  }
}
    


`;
export default Contact;