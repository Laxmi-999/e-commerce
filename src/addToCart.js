import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import  CartAmountToggle from "./CartAmountToggle";
import {NavLink} from "react-router-dom";
import Button from "./Styles/Button";
import { useCartContext } from "./Context/cart_context";

const AddToCart = ({product}) =>{
  const {AddToCart} = useCartContext();
    const{id, colors, stock } = product;
    
    const [color, setColor] = useState(colors[0])
    const [amount, setAmount] = useState(1);


    const setDecrement = () => {
      
      amount > stock ? setAmount(amount - 1) : setAmount(1);

    };

     const setIncrement = () => {
      amount < stock ?  setAmount( amount+1 ) : setAmount(stock);
    };


    // console.log( "colors are:" + colors);
    return(
    <Wrapper>
      <div className="colors">
        <p className="font-custom"> colors:
            {colors.map(( currColor, index) =>{
                return(
                    <button key = {index} style= {{backgroundColor:currColor}}
                     className={color === currColor ? "btnStyle active" : "btnStyle"}
                     onClick = {() => setColor(currColor)}
                     >
                      {color === currColor ? <FaCheck className = "checkStyle" /> : null}
                      
                 </button>
                );
            })}
        </p> 
        </div>
        <CartAmountToggle 
        amount = {amount}
        setIncrement = {setIncrement}
        setDecrement= {setDecrement}
        />    
        <NavLink to = "/cart"
        onClick = {() => AddToCart(id, color, amount, product)
        }>
          
        <Button className="font-custom">  Add To Cart </Button>

        </NavLink>
     </Wrapper>   
    );
}

const Wrapper = styled.section`
  .colors p{
    display: flex;
    color:black;
    font-size:3rem;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle{
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1.5rem;

    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active{
    opacity:5;
    padding-left:5px;
    padding-right:5px;
  }

  .checkStyle {
    font-size: 1.2rem;
    align:center;
    padding-left:auto;
    padding-right:auto;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.color.btn};
    }
  }
`;
export default AddToCart;