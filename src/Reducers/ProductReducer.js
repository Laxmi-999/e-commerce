
// if (action.type === "SET_LOADING") {
//   return {
//     ...state,
//     isLoading: true,
//   };
// }

// if (action.type === "API_ERROR") {
//   return {
//     ...state,
//     isLoading: false,
//     isError: true,
//   };
// }
const ProductReducer = (state, action) => {
  switch (action.type) 
  {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === "true";
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "SET_SINGLEPRODUCT_DATA":
      console.log("going through");

      console.log("data is"+ action.payload);
      const data = {
        ...state,
        isSingleLoading: false,
        singleProduct: {...action.payload},
      };
  console.log("data is"+data.singleProduct);
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: {...action.payload},
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isSingleErr: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;