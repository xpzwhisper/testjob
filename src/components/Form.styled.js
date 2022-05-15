import styled from "styled-components";
export const StyledForm = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 200px;
  width: 100%;
  justify-content: center;
  padding: 20px;
  background-color: #f0f5f0;
  border-radius: 4px;
  border: 1px solid black;
  .form {
    display: flex;
    flex-wrap: wrap;
  }
  .form > * {
    width: 100%;
    padding: 2px 0;
    margin: 2px 0;
  }
  .form_input_box,
  .form_button__submit {
    font-size: 1.2em;
    text-align: center;
    border: 1px solid #555;
  }
  .form_button__submit {
    border-radius: 4px;
  }
  .form_button__file {
    border: 1px solid #777;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    text-align: center;
    background-color: #eee;
    border-radius: 4px;
  }
  input[type="file"] {
    display: none;
  }
  .file_picked {
    border: 1px solid #30df30;
    color: #45ab6d;
    font-weight: bold;
    background-color: #f8ffc8;
  }
  .input_error {
    border: 1px solid red;
  }
  .kollane {
    border: 1px solid yellow;
  }
  /*------------------------ */
  .form_product_count {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  .form_product_count_number {
    font-family: fantasy;
    color: blue;
    margin-left: 5px;
    border: 1px solid blue;
    padding: 2px;
    margin-top: -2px;
  }
`;
