import React from "react";
import { useCartContext } from "./Context/cart_context";
import CartItems from "./CartItems";
import { NavLink } from "react-router-dom";
import Button from "./Styles/Button";
import FormatPrice from "./Helpers/FormatPrice";

const Cart = () => {
  const {cart, clearCart, total_price, shipping_fee } = useCartContext();
  console.log(cart);

 if(cart.length === 0){
  return (
    <div className="grid place-items-center h-[50vh]">
      <h3 className="text-4xl capitalize font-light">no cart items</h3>
    </div>
  );
 }
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center items-center mb-4">
          <p className="font-bold text-xl md:text-3xl font-custom">Items</p>
          <p className="font-bold text-xl md:text-3xl font-custom hidden md:block mr-4">Price</p>
          <p className="font-bold text-lg md:text-2xl font-custom mr-5">Quantity</p>
          <p className="font-bold text-lg md:text-2xl font-custom hidden md:block mr-1">SubTotal</p>
          <p className="font-bold text-lg md:text-2xl font-custom hidden md:block">Remove</p>
        </div>
        <hr className="my-4" />
        <div className="cart-items">
          {cart.map((currElem) => {
            return <CartItems key={currElem.id} {...currElem} />
          })}
        </div>
        <hr className="my-4" />
        <div className="flex justify-between gap-4 mt-8">
          <NavLink to="/product">
            <Button className="font-custom text-lg md:text-2xl py-3 px-6">Continue Shopping</Button>
          </NavLink>
          <Button 
            className="font-custom text-lg md:text-2xl py-3 px-6 bg-red-600 hover:bg-red-700" 
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </div>
        
        {/* order total_amount */}
        <div className="mt-12 flex justify-end">
          <div className="border border-gray-200 p-8 flex flex-col gap-4 w-full md:w-1/3">
            <div className="flex justify-between">
              <p className="font-custom text-lg">SubTotal:</p>
              <p className="font-custom text-lg font-bold">
                <FormatPrice price={total_price}/>
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-custom text-lg">Shipping Fee:</p>
              <p className="font-custom text-lg font-bold">
                <FormatPrice price={shipping_fee}/>
              </p>
            </div>
            <hr />
            <div className="flex justify-between bg-gray-50">
              <p className="font-custom text-lg">Order Total:</p>
              <p className="font-custom text-lg font-bold">
                <FormatPrice price={shipping_fee + total_price}/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;