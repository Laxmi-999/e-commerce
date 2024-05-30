import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../Reducers/cart_reducer";
import { useState } from "react";

const CartContext = createContext();

const getLocalCartData = () =>{
  let localCartData = localStorage.getItem("luxxyCart");

  if(localCartData === null ){
    return [];
  }
  else{
    return JSON.parse(localCartData);
  }
}

 const initialState = {
    // cart:[],
    cart:getLocalCartData(),
    total_item:"",
    total_price:"1000",
    shipping_fee:50000,

};


const CartProvider = ({ children}) =>{

  const [state, dispatch] = useReducer(reducer, initialState);
   
  const AddToCart = (id, color, amount, product) =>{
        dispatch({type:"ADD_TO_CART", payload: {id, color, amount, product} });
    };


    const setIncrement= (id) => {
      dispatch({ type: "SET_INCREMENT", payload:id});
      
    }
    const setDecrement= (id) => {
      dispatch({ type: "SET_DECREMENT", payload:id});
      
    }

    /// to remove the  single product from the cart
    const removeItem = (id) => {
      dispatch({type:"REMOVE_ITEM", payload:id});
    };


  // to clear the cart

  const clearCart = () =>{
    dispatch({ type:"CLEAR_CART"});
  };




    // to add data into localStorage
    // get vs set
    useEffect(() => {
      dispatch({type:"CART_TOTAL_PRICE"});
      dispatch({ type : "CART_TOTAL_ITEM"});
      localStorage.setItem("luxxyCart", JSON.stringify(state.cart));
    }, [state.cart] );



    return <CartContext.Provider value= 
    {{
      ...state,
       AddToCart, 
       removeItem,
       clearCart,
       setIncrement,
       setDecrement,

        }}>
    {children}</CartContext.Provider>
}  


/// creating global hooks so that any page can use the above function//

const useCartContext = () => {
    return useContext(CartContext);
  };
  
export { CartProvider, useCartContext };