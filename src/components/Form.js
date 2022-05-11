import { StyledForm } from "./Form.styled";

export const Form = () => {
  return (
    <>
      <StyledForm>
        <div className="form">
          <span className="form_input_title">Image:</span>
          <input type="file" />
          <span className="form_input_title">Name:</span>
          <input type="text" className="form_input_box" />
          <span className="form_input_title">Price:</span>
          <input type="text" className="form_input_box" />
          <button>Submit</button>
        </div>
      </StyledForm>
    </>
  );
};
