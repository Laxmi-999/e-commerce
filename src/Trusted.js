import React from "react";
import styled from "styled-components";
 

const Trusted = () =>
{
    return(

            <Wrapper className="wrapper">
              <div className="brand-section">
                <div className="container">
                  <h3 className="font-custom">Trusted by 1000+ conpanies</h3>
                  
                    <div className="brand-slider-container">
                      <div className="slide">
                      <img  src = "/images/brand-1.jpg" alt = "first brand img"/>
                      </div>
                      <div className="slide">
                      <img  src= "/images/brand-2.png" alt = " second brand"/>
                      </div>
                      <div className="slide">
                      <img  src = "/images/brand-3.jpg" alt = "third brand"/>
                      </div>
                      <div className="slide">
                      <img  src = "/images/brand-4.png" alt = " fourth brand"/>
                      </div>
                      <div className="slide">
                      <img  src= "/images/brand-5.jpg" alt = "fifth brand"/>
                      </div>
                    </div>
                </div>
            </div>
          </Wrapper>
    );
};


const Wrapper = styled.section`
backgroudn-color: ${({ theme}) => theme.color.bg};
padding: 9rem 0;

.brand-section
{
  background-color:${({ theme}) => theme.color.bg};
  height:40vh;
  width:100%;
  ${'' /* margin-top:10vh; */}
  ${'' /* margin-bottom:10vh; */}
  padding:5rem;
  ${'' /* background-color:pink; */}

  h3{
      ${'' /* background-color:green; */}
      color: ${({ theme}) => theme.color.text};
      font-size: 3rem;
      text-transform:capitalize;
      ${'' /* padding-bottom:5rem; */}
      font-weight:bold;
      text-align:center;
    }

  img{
  min-width: 10rem;
  height:10rem;
}   
.brand-slider-container{
  margin-top:10rem;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;

}

  @media(max-width: ${({theme}) => theme.media.mobile})
  {
    ${'' /* .wrapper{

    background-color:red;
    margin-top:auto;
    margin-bottom:auto;
    position:relative;

    } */}
    .brand-section{
      background-color:white;
    }
    .brand-slider-container {
        display: grid;
        grid-direction:row;
       
        margin-left:0;
        grid-template-columns: repeat(2, 1fr); /* Fixed the syntax error here */
        text-align: center;
        positon:absolute;
        justify-content:space-between;
        gap:5rem;
       align-items:center;
      }
    
      .container{
        display:grid;
        grid-direction:row;
     
        height:auto;
        width:100%;
        margin-top:110vh;
      
        margin-bottom:10vh;
        align-items:center;
        align-content:center;
        background-color: ${({ theme}) => theme.color.bg};

        h3{
       
          height:auto;
          width:100%;
          text-align:center;
          padding:2rem;
        }
        
      }
   
  }
  
}
`;
export default Trusted;