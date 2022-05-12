import { StyledForm } from "./Form.styled";
import { useContext } from "react";
import MainContext from "./MainContext";
import { useState } from "react";

export const Form = () => {
  const [image, setImage] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { products, addProduct } = useContext(MainContext);

  const addProductfn = (e) => {
    e.preventDefault();
    if (name !== "" && price !== "" && image.length !== 0) {
      const key = Math.floor(Math.random() * 10000);
      addProduct(image, name, price, key);
      setName("");
      setPrice("");
    }
  };

  return (
    <>
      <StyledForm>
        <div className="form">
          <label className="form_input_title">Image:</label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
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
          <button onClick={addProductfn} className="form_button">
            Submit
          </button>
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
        </div>
      </StyledForm>
    </>
  );
};
