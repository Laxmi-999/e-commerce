import React from "react";
import { FaPlus,FaMinus } from "react-icons/fa";
import styled from "styled-components";


const CartAmountToggle = ({ amount, setIncrement, setDecrement }) =>{
    console.log(amount);

    return (
      <Wrapper>
        <div className="cart-button">
          <div className="amount-toggle flex justify-center align-center items-center gap-3">
            <button className="btn-dec" onClick={ ()=> setDecrement() }><FaMinus /></button>
              <div className="text-[1.8rem] font-bold">{amount}</div>
            <button className= "btn-inc" onClick={ ()=> setIncrement()}><FaPlus /></button>
          </div>
        </div>
       </Wrapper>

    );
}

const Wrapper = styled.section`

.amount-toggle{
  margin-left:0;
  margin-right:0;
  padding:0;
  width:10vh;

  .btn-dec{
    
    font-size:1.5rem;

  }
  .text-[1.5rem] font-bold{
    font-size:1.5rem;
    
   
  }
  .btn-inc{
    
    font-size:1.5rem;
  }
  
}

@media(max-width:480px){
  display:inline-flex;
  flex-direction:column;

  .cart-button{
    padding:0;
    margin:0;
    height:auto;
    width:auto;
    justify-content:center;
    align-items:center;


  .amount-toggle{
  margin:0;
  padding:0;

  .btn-dec{
    margin-right:0;
    padding-right:0;
    font-size:1rem;

  }
  .text-[1.5rem] font-bold{
    font-size:1rem;
    margin-left:0;
    padding-left:0;
  }
  .btn-inc{
    margin-left:0;
    padding-left:0;
    font-size:1rem;
  }
  
}
  }
 
}
`;
export default CartAmountToggle;