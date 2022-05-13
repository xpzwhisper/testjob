import { useContext } from "react";
import MainContext from "./MainContext";
import { Column, Row } from "./Grid";
import { Card } from "./Card";

export const Products = () => {
  const { products } = useContext(MainContext);
  console.log(products);
  return (
    <>
      <div>
        <Row>
          {products.map((product) => (
            <Column xs="12" sm="6" md="4" lg="3">
              <Card
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            </Column>
          ))}
        </Row>
      </div>
    </>
  );
};
