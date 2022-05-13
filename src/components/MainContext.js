import { createContext, useState } from "react";

const MainContext = createContext();

export function MainProvider({ children }) {
  const [products, setProducts] = useState([]);
  const addProduct = (image, name, price, id) => {
    setProducts((prevState) => [...prevState, { image, name, price, id }]);
  };

  return (
    <MainContext.Provider value={{ products, addProduct }}>
      {children}
    </MainContext.Provider>
  );
}
export default MainContext;
