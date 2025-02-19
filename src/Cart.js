import React from "react";
import { useCartContext } from "./Context/cart_context";
import styled from "styled-components";
import CartItems from "./CartItems";
import { NavLink } from "react-router-dom";
import Button from "./Styles/Button";
import FormatPrice from "./Helpers/FormatPrice";


const Cart = () => {
  const {cart, clearCart, total_price, shipping_fee } = useCartContext();
  console.log(cart);

 if(cart.length === 0){
  return <EmptyDiv>
    <h3>no cart items</h3>
  </EmptyDiv>
 }
  return (
    <Wrapper>
      <div className="container">
        <div className="cart-heading grid grid-five-column">
          <p className=" cart-heading-items font-bold lg:text-[3rem] md:text-[1.5rem] md:font-bold font-custom">Items</p>
          <p className="cart-heading-items cart_hide font-bold lg:text-[3rem] md:text-[1.5rem] md:font-bold  mr-[4rem] font-custom ">Price</p>
          <p className=" cart-heading-items font-bold lg:text-[2.5rem] md:text-[1.5rem] md:font-bold mr-[5rem]  font-custom">Qantity</p>
          <p className=" cart-heading-items cart_hide font-bold lg:text-[2.5rem] md:text-[1.5rem] md:font-bold mr-[1rem] font-custom ">SubTotal</p>
          <p className="cart-heading-items cart_hide font-bold lg:text-[2.5rem] md:text-[1.5rem] md:font-bold  font-custom">Remove</p>
        </div>
        <hr />
        <div className="cart-items">
          {cart.map((currElem) => {
            return < CartItems key={currElem.id}  {...currElem} />
          })}

        </div>
        <hr />
        <div className="cart-two-button">
          <NavLink to="/product">
            <Button className="font-custom">Continue Shopping</Button>
          </NavLink>
          <Button className="btn btn-clear font-custom"
            onClick={clearCart}>Clear Cart</Button>

        </div>
        

        {/* order total_amount */}
        <div className="order-total--amount">
        <div className="order-total--subdata">
          <div>
            <p className="font-custom"> SubTotal:</p>
            <p className="font-custom">
              <FormatPrice  price = {total_price}/>
            </p>
          </div>
          <div>
            <p className="font-custom">Shipping Fee:</p>
            <p className="font-custom"><FormatPrice  price = {shipping_fee}/></p>
          </div>
          <hr />
          <div>
            <p className="font-custom">Order Total :</p>
            <p className="font-custom"><FormatPrice  price = {shipping_fee + total_price }/></p>
          </div>

        </div>

        </div>
      </div>
    </Wrapper>

  );
}
const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;


  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

const Wrapper = styled.section`
  padding: 9rem 0;


  .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;

      Button{
        text-size:3rem;
        padding:1.5rem;

      }
    }
    .order-total--amount {
    width: 100%;
    height:auto;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
  
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
      
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      text-size:2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.color.heading};
    }
  }


  @media(max-width:768px){
    ${'' /* background-color:pink; */}
    padding:5rem 0;

  }

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: capitalize;

  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
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

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.color.heading};
    }
  }

  @media(max-width:480px){
     
    


    .cart-items{
      justify-content:center;
      align-items:center;
      gap:5rem;

    }
    .cart-heading{
      text-size:1rem;
      font-weight:bold;
      justify-content:center;
      aling-items:center;
      ${'' /* background-color:yellow; */}


      .cart-heading-items{
        text-size:1rem;
        font-weight:bold;
        ${'' /* background-color:blue; */}
        width:10vh;
        ${'' /* margin-left:1rem; */}

      }
    }

  }

  ${'' /* @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;

      .remove-icon{
        font-size: 1.6rem;
        color: red;
        cursor: pointer;
        
      }
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  } */}
`;
export default Cart;