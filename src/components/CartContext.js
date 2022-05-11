import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const addProduct = (image, name, price) => {
    setProducts((prevState) => [...prevState, { image, name, price }]);
  };
  return (
    <CartContext.Provider value={{ products, addProduct }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
