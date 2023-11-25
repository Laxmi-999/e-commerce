import React from "react";
import styled from "styled-components";
import Button from "./Styles/Button";
import {NavLink} from "react-router-dom";
 

const ErrorPage = () => {
    return(
        <Wrapper >
         <div className="container">
         <div className="err-details">
         <h2> ERROR 404</h2>
            <h2> OH NO !! YOU GOT LOST</h2>

            <p> It seems that you have entered wrong url.
            anyway if you want to go back, simpily click on  button below then you will be on home page.</p>
         </div>
         <NavLink to = "/"> 
         <Button>  
            GO BACK 
         </Button>
            
         </NavLink>
         </div>
         

        </Wrapper>


    );
}
const Wrapper = styled.section`

.container{
    height:50vh;
    width:100%;
    padding:9rem;
    text-align:center;
    ${'' /* background-color:pink; */}
    justify-content:center;
    align-items:center;
   
}
.err-details{
    display:inline-grid;
    gap:2rem;
    padding-bottom:2rem;
    p{
        font-size:2rem;
    }

}
.Button{
    margin-top:5rem;
    height:auto;
    width:100%;
    padding:2rem;
    text-align:center;
    justify-self:center;
    
}
`;
export default ErrorPage;