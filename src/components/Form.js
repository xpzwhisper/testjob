import { StyledForm } from "./Form.styled";
import { useContext } from "react";
import MainContext from "./helpers/MainContext";
import { useState } from "react";
import { useRef } from "react";
import useKey from "./helpers/UseKey";

export const Form = () => {
  let { products, addProduct } = useContext(MainContext);

  let filePickedText = "--- File picked ---";
  let [fileSelState, setFileSelState] = useState({
    picked: false,
    text: "Pick a file...",
  });

  let [priceTypeIsNumber, setPriceTypeIsNumber] = useState(null);
  const [file, setFile] = useState("");
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [inputBox, setInputBox] = useState({
    name: true,
    price: true,
    nameTooLong: false,
  });

  // resetting the value of <input type="file"> for the re-use of the same file
  const ref = useRef();
  const resetFile = () => {
    ref.current.value = "";
  };
  // simulates form submission when Enter is pressed
  const handleKeyEnter = () => {
    document.getElementById("submitButton").click();
  };
  useKey("Enter", handleKeyEnter);

  // function for testing if inputboxes are empty
  function inputBoxFilled(name, price) {
    if (price === "" && name === "") {
      return { price: false, name: false };
    }
    if (price === "" && name !== "") {
      return { price: false, name: true };
    }
    if (price !== "" && name === "") {
      return { price: true, name: false };
    }
    if (price !== "" && name !== "") {
      return { price: true, name: true };
    }
  }
  // ------------------------------------
  // regex for matching only five integers followed by decimal point and two decimal integers (pattern: 12345.67)
  const priceRegex = new RegExp("^\\d{1,5}\\.\\d{1,2}$|^\\d{1,5}$");
  // regex for matching only 18 characters
  const nameRegex = new RegExp("^.{0,18}$");

  // -----------------------------------------------------------------------------
  // for matching only letters and numbers
  // + ",.-:"
  // + unicode special characters in the range of (00c0-00fC) -> (e.g: ÕõÄäÖöÜü etc)
  // const nameRegex = new RegExp("^[\u00c0-\u00fCA-Za-z0-9\\,\\.\\-\\:]{0,18}$");
  // -----------------------------------------------------------------------------

  const addProductfn = (e) => {
    e.preventDefault();

    setInputBox(inputBoxFilled(name, price));

    if (!priceRegex.test(price) && price !== "") {
      setPriceTypeIsNumber(false);
    }
    if (!nameRegex.test(name)) {
      setInputBox({ ...inputBox, nameTooLong: true });
    }
    if (name !== "" && price !== "" && file !== "") {
      if (priceRegex.test(price)) {
        const id = Math.floor(Math.random() * 10000);
        addProduct(file, name, price, id);
        setName("");
        setPrice("");
        setFile("");
        resetFile();
        setFileSelState({ picked: false, text: "Pick a file..." });
      }
    }
  };
  // ----------------------------------------------------
  return (
    <>
      <StyledForm>
        <div className="form">
          {/* -FILE--------------------------------------- */}
          <label className="form_input_title">
            Image:
            {typeof file.size !== "undefined"
              ? " Size: " + (file.size / (1024 * 1024)).toFixed(2) + "MB"
              : ""}
          </label>
          <label
            id="filePicker"
            className={
              fileSelState.picked
                ? "form_button__file file_picked"
                : "form_button__file"
            }
          >
            {fileSelState.text}
            <input
              className=""
              onChange={(e) => {
                setFile(e.target.files[0]);
                setFileSelState({ picked: true, text: filePickedText });
              }}
              type="file"
              ref={ref}
            />
          </label>
          {/* -NAME--------------------------------------- */}
          <label className="form_input_title">
            Name:{inputBox.nameTooLong ? " Name too long" : ""}
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
              setInputBox({ ...inputBox, name: true, nameTooLong: false });
            }}
            type="text"
            value={name}
            className={
              inputBox.name || inputBox.name === null
                ? "form_input_box"
                : "form_input_box input_error"
            }
          />
          {/* -PRICE--------------------------------------- */}
          <label className="form_input_title">
            Price:
            {!priceTypeIsNumber && priceTypeIsNumber !== null
              ? " format (12345.67)"
              : ""}
          </label>
          <input
            // placeholder="x.xx"
            onChange={(e) => {
              setPrice(e.target.value);
              setPriceTypeIsNumber(true);
              setInputBox({ ...inputBox, price: true });
            }}
            type="text"
            value={price}
            className={
              inputBox.price === true && priceTypeIsNumber === true
                ? "form_input_box"
                : inputBox.price === false || priceTypeIsNumber === false
                ? "form_input_box input_error"
                : "form_input_box"
            }
          />
          {/* -------------------------------------------- */}
          <button
            id="submitButton"
            onClick={addProductfn}
            className="form_button__submit"
          >
            Submit
          </button>
          {/* -------------------------------------------- */}
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
