import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
 

const Services = () =>

{
    return(
    <Wrapper>
        <div className="container">
         <div className="grid grid-three-column">

           <div className="services">
             <div className="service-data">
                <TbTruckDelivery  className=" icon icon-1"/>
                 <h3 className="font-custom">upper fast and free delivery</h3>
             </div>

           </div>
           <div className="services">
             <div className=" services-column-2">

                    <div className="service-data-2">
                        <MdSecurity  className='icon icon-2'/>
                        <h3 className="font-custom">non-contact shipping</h3>
                    </div>
            
                    <div className="service-data-2">
                        <GiReceiveMoney className='icon icon-3'/>
                        <h3 className="font-custom">non-contact shipping</h3>
                   </div>
             </div>
           </div>
           <div className="services">
             <div className="service-data">
                <TbTruckDelivery  className="icon icon-4"/>
                <h3 className="font-custom">Money Back Gurantee</h3>
             </div>

           </div>

         </div>
        </div>
    </Wrapper>

    );
};
const Wrapper = styled.section`

${'' /* background-color:pink; */}

height:auto;
.container{
background-color:fit-content;
padding:2rem 0 2rem 0;
height:100%;
width:100%;
margin-top:7%;
margin-bottom:7%;

}


.grid-three-column{
    ${'' /* grid-template-columns:repeat(3,  2fr); */}
    ${'' /* background-color:black; */}
    display:flex;
    flex-direction:row;
    height:20vh;
    width:100%;
    border-radius:2rem;
    gap:10rem;
    ${'' /* background-color: white; */}
}
.services{
    background-color: ${({theme}) => theme.color.bg};
    ${'' /* background-color:yellow; */}
    height: 30vh;
    border-radius:2rem;
    width:100%;
    ${'' /* padding:3rem; */}
    display:flex;
    flex-direction:row;
    ${'' /* padding:1%; */}
    gap:4rem;
    justify-content:center;
    align-items:center;
    

 .service-data{
    position:absolute;
    margin-top:0;
    display:flex;
    gap:1rem;
    background-color: white;
    border-radius:2rem;

    padding:2rem;
    ${'' /* padding:1%; */}
    justify-content:center;
    align-items:center;
    h3{
        font-size: 2rem;
        color: ${({ theme}) =>  theme.color.text};

 
    } 
}
.icon,
.icon-1,
.icon-2,
.icon-3,
.icon-4
    {
        font-size: 2.5rem;
        color:blue;

    }

.services-column-2{
        display:grid;
        gap: 5rem; 
        background-color:white;
        margin-top:0;
        margin-bottm:0;
        height:auto;
        width:100%;
        padding:5px;

    }
    .service-data-2{
    display:flex;
    flex-direction:column;
    gap:4rem;
    background-color: ${({theme}) => theme.color.bg};
    padding: 3px;
    height:auto;
    width:100%;
    padding:2rem;
    border-radius:2rem;
    justify-content:center;
    align-items:center;

    h3{
        font-size: 2rem;
        background-color:white;
        padding:2rem;
        border-radius:2rem;

 
    }
    .icon{
        color:blue;
        font-size:3rem;
        align-self:center;
        justify-content:center;
        align-items:center;
        background-color:white;

    }

    }
}

@media(max-width: ${({ theme}) => theme.media.mobile}){
    .grid-three-column {
      ${'' /* height:auto;
      width:100%; */}
      display: grid;
      grid-direction:row;
      grid-template-columns: repeat(1, 1fr); /* Change to single column for mobile */
     
      position:absolute;
    }
    .services{
        margin-bottom:3rem;
        ${'' /* background-color:purple; */}
        
    }
    .service-data{
        margin-top:5rem;
        margin-bottom:5rem;
        ${'' /* background-color:blue; */}
    }
    .services-column-2{
        height:auto;
        width:100%;
        position:absolute;
        justify-content:center;
        align-items:center;
        display:inline-grid;
        grid-template-columns: repeat(1, 1fr);
        gap:2rem;
        ${'' /* background-color:pink; */}
        
        ${'' /* padding:5px; */}

        .service-data-2{
            ${'' /* background-color:blue; */}
            display:inline-grid;
            grid-direction:row;
            gap:2rem;
            position:relative;
    
        }

    }

    }


}

`;

export default Services;