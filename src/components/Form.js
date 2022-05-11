import { StyledForm } from "./Form.styled";
import { useContext } from "react";
import CartContext from "./CartContext";
import { useState } from "react";

export const Form = () => {
  const [image, setImage] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { products, addProduct } = useContext(CartContext);

  const addProductfn = (e) => {
    e.preventDefault();
    if (name !== "" && price !== "") {
      addProduct(image, name, price);
      setName("");
      setPrice("");
    }
  };
  return (
    <>
      <StyledForm>
        <form onSubmit={addProductfn} className="form">
          <label className="form_input_title">Image:</label>
          <input
            onChange={(e) => {
              setImage(e.target.files);
            }}
            type="file"
          />
          <label className="form_input_title">Name:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            value={name}
            className="form_input_box"
          />
          <label className="form_input_title">Price:</label>
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="text"
            value={price}
            className="form_input_box"
          />
          <input type="submit" value="submit " className="form_button" />
          {products.length > 0 ? (
            <div className="form_product_count">
              <label className="form_product_count_label">Product count:</label>

              <span className="form_product_count_number">
                {products.length}
              </span>
            </div>
          ) : (
            ""
          )}
        </form>
      </StyledForm>
    </>
  );
};
