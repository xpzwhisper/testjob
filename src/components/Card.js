import { StyledCard } from "./Card.styled";
import { Column } from "./helpers/Grid";
import { useContext } from "react";
import { ArrowRightOutlined, DeleteOutlined } from "@ant-design/icons";
import MainContext from "./helpers/MainContext";

export const Card = ({ product }) => {
  let { addProductToCart, deleteProduct } = useContext(MainContext);

  const addProductToCartFn = () => {
    addProductToCart(product.image, product.name, product.price, product.id);
  };
  const deleteProductFn = () => {
    deleteProduct(product);
  };

  const imageURL = URL.createObjectURL(product.image);

  return (
    <>
      <Column xs="12" sm="4" md="3" lg="3">
        <StyledCard>
          <div className="card">
            <div className="card__image_placeholder">
              <img className="card__product_image" src={imageURL} alt="" />
            </div>

            <div className="card__product_info">
              <label className="card__label">Name:</label>
              <h2 className="card__product_name"> {product.name}</h2>
            </div>

            <div className="card__product_info card__product_info_bottom">
              <label className="card__label">Price:</label>
              <h2 className="card__product_price">{product.price}</h2>
            </div>

            <div onClick={deleteProductFn} className="card__product_delete">
              <DeleteOutlined />
            </div>

            <div onClick={addProductToCartFn} className="card__addToCart">
              <ArrowRightOutlined />
            </div>
          </div>
        </StyledCard>
      </Column>
    </>
  );
};
