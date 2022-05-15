import { useContext } from "react";
import MainContext from "./MainContext";
import { Row } from "./Grid";
import { Card } from "./Card";

export const Products = () => {
  const { products } = useContext(MainContext);
  console.log(products);
  return (
    <>
      <div>
        <Row>
          {products.map((product, index) => (
            <Card
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              id={product.id}
            />
          ))}
        </Row>
      </div>
    </>
  );
};
