import axios from "axios";
import React, { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import reducer from "../../components/reducer/productReducer"

// Define the type for the context value
interface AppContextType {
  myName: string;
  products: any[]; // You can define a more specific type based on the structure of the products
  getProducts: (url: string) => Promise<void>;
}

// Define the default context value
const defaultContextValue: AppContextType = {
  products: [],
  getProducts: async () => { },
  myName: ""
};

// Create the context with the defined type
const AppContext = createContext<AppContextType>(defaultContextValue);

const API = 'https://fakestoreapi.com/products';

interface AppProviderProps {
  children: ReactNode;
}

const initialState = {
    isLoding:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading: false,
    SingleProduct: {},
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url: string) => {
    dispatch({
      type: "SET_LOADING",
      paylode: [],
      payload: undefined
    });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({
        type: "SET_API_DATA", payload: products,
        paylode: []
      });
    } catch (error) {
      dispatch({
        type: "API_ERROR",
        paylode: [],
        payload: undefined
      });
    }
  };

  const getSingleProduct = async (url: string) => {
    dispatch({
      type: "SET_SINGLE_LOADING",
      paylode: [],
      payload: undefined
    });
    
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({
        type: "SET_SINGLE_PRODUCT", payload: singleProduct,
        paylode: []
      });
    } catch (error) {
      dispatch({
        type: "SET_SINGLE_ERROR",
        paylode: [],
        payload: undefined
      });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};


// Create a custom hook
const useProductsContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductsContext };
