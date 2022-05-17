import { StyledForm } from "./Form.styled";
import { useContext } from "react";
import MainContext from "./helpers/MainContext";
import { useState } from "react";
import { useRef } from "react";
import useKey from "./helpers/UseKey";

export const Form = () => {
  let { products, addProduct } = useContext(MainContext);

  let filePickedText = "--- File picked ---";
  let [fileState, setFileState] = useState({
    picked: false,
    text: "Pick a file...",
  });

  let [priceTypeIsNumber, setPriceTypeIsNumber] = useState(true);
  const [file, setFile] = useState("");
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [inputBox, setInputBox] = useState({
    nameBlank: false,
    priceBlank: false,
  });
  let [nameTooLong, setNameTooLong] = useState(false);

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
  function inputBoxIsFilled(name, price) {
    if (price === "" && name === "") {
      return { priceBlank: true, nameBlank: true };
    }
    if (price === "" && name !== "") {
      return { priceBlank: true, nameBlank: false };
    }
    if (price !== "" && name === "") {
      return { priceBlank: false, nameBlank: true };
    }
    if (price !== "" && name !== "") {
      return { priceBlank: false, nameBlank: false };
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

  const addProductFn = (e) => {
    e.preventDefault();

    setInputBox(inputBoxIsFilled(name, price));

    if (!priceRegex.test(price) && price !== "") {
      setPriceTypeIsNumber(false);
    }

    !nameRegex.test(name) ? setNameTooLong(true) : setNameTooLong(false);

    if (name !== "" && price !== "" && file !== "") {
      if (priceRegex.test(price)) {
        const id = Math.floor(Math.random() * 10000);
        addProduct(file, name, price, id);
        setName("");
        setPrice("");
        setFile("");
        resetFile();
        setFileState({ picked: false, text: "Pick a file..." });
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
              fileState.picked
                ? "form_button__file file_picked"
                : "form_button__file"
            }
          >
            {fileState.text}
            <input
              className=""
              onChange={(e) => {
                setFile(e.target.files[0]);
                setFileState({ picked: true, text: filePickedText });
              }}
              type="file"
              ref={ref}
            />
          </label>
          {/* -NAME--------------------------------------- */}
          <label className="form_input_title">
            Name:{nameTooLong ? " Name too long" : ""}
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
              setInputBox({
                ...inputBox,
                nameBlank: false,
              });
              setNameTooLong(false);
            }}
            type="text"
            value={name}
            className={
              nameTooLong || inputBox.nameBlank
                ? "form_input_box input_error"
                : "form_input_box"
            }
          />
          {/* -PRICE--------------------------------------- */}
          <label className="form_input_title">
            Price:
            {!priceTypeIsNumber ? " format (12345.67)" : ""}
          </label>
          <input
            // placeholder="x.xx"
            onChange={(e) => {
              setPrice(e.target.value);
              setPriceTypeIsNumber(true);
              setInputBox({ ...inputBox, priceBlank: false });
            }}
            type="text"
            value={price}
            className={
              !inputBox.priceBlank && priceTypeIsNumber
                ? "form_input_box"
                : !inputBox.priceBlank || priceTypeIsNumber // if either matches the other must be opposite based on the previous test (both match)
                ? "form_input_box input_error"
                : "form_input_box"
            }
          />
          {/* -BUTTON-------------------------------------- */}
          <button
            id="submitButton"
            onClick={addProductFn}
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
