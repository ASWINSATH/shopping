import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { cartReducer } from './Reducers';


export const CartContext = createContext();

function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);


  //fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, [])

  const[state, dispatch] = useReducer(cartReducer,{
    products:products,
    CartContext:[]
  })



  return (<CartContext.Provider value={{ products,state,dispatch }}>{children}</CartContext.Provider>
  )
}

export default ContextProvider
export const CartState = () => {
  return useContext(CartContext)
}