import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducers/ProductReducer";

const AppContext = createContext();

const API =
  //  "https://api.pujakaitem.com/api/products";
  // "http://localhost:3001/service";
  "https://ecomapi-htt5.vercel.app/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
  isSingleErr: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url, { withCredentials: true });
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });

    } catch (error) {
      // console.log("error");
      // console.log(error);
      dispatch({ type: "API_ERROR" });
    }
  };

  // my second  api call for single

  const getSingleProducts = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url, { withCredentials: true });
      const singleProduct = await res.data;

      dispatch({ type: "SET_SINGLEPRODUCT_DATA", payload: singleProduct });

    } catch (error) {
      // console.log("error");
      // console.log(error);
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProducts }}>{children}</AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };