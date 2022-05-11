import styled from "styled-components";
export const StyledHeader = styled.div`
  margin-bottom: 20px;
  .header__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    height: 80px;
    background-color: #aee;
    margin: 0 15px;
    margin-bottom: 35px;
    -webkit-box-shadow: 12px 12px 16px 8px rgba(0, 0, 0, 0.84);
    box-shadow: 12px 12px 16px 8px rgba(0, 0, 0, 0.84);
  }
  .header__main > * {
    background-color: aquamarine;
  }
  .header__title {
    margin-left: 50px;
  }
  /* Navbar------------- */
  .header__navbar {
    display: flex;
    justify-content: space-evenly;
  }
  .header__navbar_button {
    width: 80px;
    height: 30px;
  }
`;
