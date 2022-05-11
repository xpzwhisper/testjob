import { useContext } from "react";
import CartContext from "./CartContext";

export const Products = () => {
  const { products } = useContext(CartContext);
  console.log(products);
  return (
    <>
      <div>
        {products.map((product) => (
          <div>
            <div>{product.name}</div>
            <div>{product.price}</div>
          </div>
        ))}
      </div>
    </>
  );
};
