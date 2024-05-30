const cartReducer = (state, action) =>{
    
    if(action.type === "ADD_TO_CART"){
        let {id, color, amount, product} = action.payload;
        // console.log(product);
      
        // tackling existing product
        let existingProduct = state.cart.find(
            (curItem) => curItem.id == id + color
          );
      if(existingProduct){
        let updatedProduct = state.cart.map((curItem) =>{
          if(curItem.id === id+color){
            let newAmount = curItem.amount + amount;

            if(newAmount >= curItem.max){
              newAmount = curItem.max;
            }
            return{
              ...curItem,
              amount: newAmount,

            };
          }
          else{
            return curItem;
          }
        });
        return{
          ...state,
            cart: updatedProduct,

        }
      }
      else{
        let cartProduct;
        cartProduct = {
            id:id+color,
            name:product.name,
            color,
            amount,
            image:product.image[0].url,
            price: product.price,
            max: product.stock,
        };
        return{
            ...state,
            cart: [...state.cart, cartProduct]
 
        };
    }
}
 // to set increment and decrement

 if(action.type === "SET_INCREMENT"){
  let updatedProduct = state.cart.map((currElem) =>{
      if(currElem.id === action.payload){
          let IncAmount = currElem.amount + 1;
          
          if(IncAmount >= currElem.max){
            IncAmount = currElem.max;
          }
          return {
            ...currElem,
            amount: IncAmount,
          }
      }
      else{
        return currElem;
      }
  });
  return {
    ...state,
    cart: updatedProduct,
  }
}
if(action.type === "SET_DECREMENT"){
  let updatedProduct = state.cart.map((currElem) =>{
      if(currElem.id === action.payload){
          let decAmount = currElem.amount - 1;

          if(decAmount <= 1) {
            decAmount=1;
          }
          return {
            ...currElem,
            amount: decAmount,
          }
      }
      else{
        return currElem;
      }
  });
  return {
    ...state,
    cart: updatedProduct,
  }
}

    if(action.type === "REMOVE_ITEM")
    {
      let updatedCart = state.cart.filter((currItem) =>
      currItem.id !== action.payload);
        return{
            ...state,
            cart: updatedCart, 
        };
    }

    if(action.type === "CLEAR_CART"){
        return {
            ...state,
            cart:[]
        }
    }
    if(action.type === "CART_TOTAL_ITEM"){
      let updatedItemVal = state.cart.reduce(( initialVal, currElem) =>{ 
        let {amount} = currElem;

        initialVal = initialVal+amount;

        return initialVal;

      },0)

      return{
        ...state,
        total_item: updatedItemVal,
      }
    }
    if(action.type === "CART_TOTAL_PRICE"){
      let total_price = state.cart.reduce(( initialVal, currElem) =>{
        let {price, amount } = currElem;

        initialVal =  initialVal + price * amount;

        return initialVal;
      }, 0);

      return{
      ...state,
        total_price,
      };
    }
    
    return state;
}
export default cartReducer;