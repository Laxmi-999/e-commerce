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
    <Wrapper>
    <div className="cart_heading grid grid-five-column">
       <div className="cart-image--name">
        <div className="cart-img">
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div className="cart-color">
          <p className="name">{name}</p>
          <div className="color">
            <p className="">color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}></div>
          </div>
        </div>
      </div> 
      {/* price   */}
      <div className="cart-hide-price">
        <p className="">
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
            <div className="cart_hide-subTotal">
          
                 {/* {price * amount } */}
                  <p className =  "" ><FormatPrice  className ="format-price" price = { price * amount } /></p>
            </div>
            <div className="cart-hide-trash">
                <FaTrash  onClick={()=> removeItem(id)} />
            </div>

            <div>
       
            </div>
       </div>
    </Wrapper>
    );

}

const Wrapper = styled.div`
height:auto;
width:auto;


.cart-hide-trash{
      ${'' /* background-color:blue; */}
      margin-left:3rem;
      margin-right:0;
      color:red;
      font-size:2rem;
      justify-content:center;
      align:center;
      items:center;
    }
.grid-five-column{
  ${'' /* background-color:blue; */}
  justify-content:space-between;
  ${'' /* gap:5rem; */}

  width:100%;
  ${'' /* display:inline-flex; */}
  flex-direction:row;
  justify-content:center;
  align:center;
  items:center;

}

.cart-image--name{
  margin:0;
  padding:0;
  width:100%:
  height:100%;
  justify-content:center;
  align:center;
  items:center;

  .cart-img{
    height:auto;
    width:auto;
    
  }
}
.cart-color{
 
   .name{
    font-size:2.5rem;
    font:bold;
  
  }
}
.color-style{

}
.cart-hide-price{
        ${'' /* background-color:blue; */}
        width:10vh;
        justify-content:center;
       align:center;
       items:center;

  p{
    font-size:2rem;
  }
}
.cart_hide-subTotal{
  
      width:10vh;
      justify-content:center;
      align:center;
      items:center;

      p{
        font-size:2rem;
      }
      
    }




@media(max-width:768px) {

.cart-color{
 
 p{
  font-size:1.5rem;
  font:bold;

}
}
.color-style{
  
}
}
@media(max-width:480px)
 {
  ${'' /* background-color:red; */}
  height:auto;
  width:100%;
  margin-left:0;
  margin-right:0;
  padding:0;


  .grid-five-column{
    ${'' /* background-color:yellow; */}
    width:100%;
    display:inline-flex;
    flex-direction:row;

    .cart-hide-trash{
      ${'' /* background-color:blue; */}
      margin-left:3rem;
      margin-right:0;
      justify:last;
      color:red;
      font-size:1.5rem;
    }

    .cart_hide-subTotal{
      ${'' /* background-color:blue; */}
      width:10vh;

      p{
        font-size:1rem;
      }
      
    }

    .cart-hide-price{
        ${'' /* background-color:blue; */}
        width:10vh;

  p{
    font-size:1rem;
  }
}
  

  .cart-image--name{
    ${'' /* background-color:blue; */}
    justify-content:center;
    align-items:center;
    padding:0;
    margin:0;
    height:auto;
    width:20vh;


    .cart-img{
    height:auto;
    width:auto;
    margin:0;
  }

  .cart-color{
   
 
 .name{
  font-size:1rem;
  font:bold;

}
.color{

  p{
    font-size:1rem;
  }
}

}

  }

}
}


`;
export default CartItems;
