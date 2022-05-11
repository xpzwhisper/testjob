import styled from "styled-components";
export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  height: 80px;
  background-color: #aee;
  margin: 0 15px;
  margin-bottom: 50px;
  -webkit-box-shadow: 12px 12px 16px 8px rgba(0, 0, 0, 0.84);
  box-shadow: 12px 12px 16px 8px rgba(0, 0, 0, 0.84);
  .header__title {
    margin-left: 50px;
  }
  & > * {
    background-color: aquamarine;
  }
`;
