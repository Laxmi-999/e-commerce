import React from "react";
import FormatPrice from "./Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "./Context/cart_context";
import styled from "styled-components";

const CartItems = ( {id, name, color, image, price, amount }) => {
 const {removeItem, setIncrement, setDecrement} = useCartContext();
  // console.log(price);
    // const setDecrement = () => {
      
        // amount > stock ? setAmount(amount - 1) : setAmount(1);
  
      // };
  
      //  const setIncrement = () => {
        // amount < stock ?  setAmount( amount+1 ) : setAmount(stock); 
      // };
    return (
    <div className="cart_heading grid grid-five-column">
       <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}></div>
          </div>
        </div>
      </div> 
      {/* price   */}
      <div className="cart-hide">
        <p>
         {/* {price} */}
         <FormatPrice  className= "cart-hide" price={price} />
        </p>
      </div>

          {/* quantity */}
             <CartAmountToggle 
                amount = {amount}
                setIncrement = {() => setIncrement(id)}
                setDecrement= {() => setDecrement(id) } /> 

            {/* SubTotal */}
            <div className="cart_hide">
          
                 {/* {price * amount } */}
                  <p><FormatPrice className = "cart-hide" price = { price * amount } /></p>
            </div>
            <div className="cart-hide">
                <FaTrash className="text-red-500  ml-[1rem] text-[2rem]" onClick={()=> removeItem(id)} />
            </div>

            <div>
       
            </div>
       </div>
       
    );

}

const Wrapper = styled.div`
`;
export default CartItems;
