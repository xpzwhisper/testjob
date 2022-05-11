import styled from "styled-components";
export const StyledForm = styled.form`
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
`;
