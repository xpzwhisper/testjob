import { useContext } from "react";
import MainContext from "./helpers/MainContext";
import { Row } from "./helpers/Grid";
import { Card } from "./Card";

export const Products = () => {
  const { products } = useContext(MainContext);
  return (
    <>
      <div>
        <Row>
          {products.map((product) => (
            <Card product={product} key={product.id} products={products} />
          ))}
        </Row>
      </div>
    </>
  );
};
