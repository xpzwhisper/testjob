import { createContext, useState } from "react";

const MainContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const addProduct = (image, name, price, id) => {
    setProducts((prevState) => [...prevState, { image, name, price, id }]);
  };
  const deleteProduct = (product) => {
    setProducts(products.filter((el) => el.id !== product.id));
  };

  const [cartItems, setCartItems] = useState([]);
  const addProductToCart = (image, name, price, id) => {
    setCartItems((prevState) => [...prevState, { image, name, price, id }]);
  };

  return (
    <MainContext.Provider
      value={{
        products,
        addProduct,
        cartItems,
        addProductToCart,
        deleteProduct,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
export default MainContext;
