import { createContext, useState } from "react";

const MainContext = createContext();

export function MainProvider({ children }) {
  const [products, setProducts] = useState([]);
  const addProduct = (image, name, price, id) => {
    setProducts((prevState) => [...prevState, { image, name, price, id }]);
  };
  const [pagetitle, setPagetitle] = useState("");
  const updateTitle = (pagetitle) => {
    setPagetitle(pagetitle);
  };
  return (
    <MainContext.Provider
      value={{ products, addProduct, updateTitle, pagetitle }}
    >
      {children}
    </MainContext.Provider>
  );
}
export default MainContext;
