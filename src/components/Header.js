import { StyledHeader } from "./Header.styled";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  let navigate = useNavigate();

  return (
    <>
      <StyledHeader>
        <div className="header__main">
          <div className="header__title">This is title</div>
          <div className="header__cart">this is cart</div>
        </div>
        <nav className="header__navbar">
          <div className="header__navbar_item">
            <button
              className="header__navbar_button"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </button>
          </div>

          <div className="header__navbar_item">
            <button
              className="header__navbar_button"
              onClick={() => {
                navigate("/form");
              }}
            >
              Form
            </button>
          </div>

          <div className="header__navbar_item">
            <button
              className="header__navbar_button"
              onClick={() => {
                navigate("/products");
              }}
            >
              Products
            </button>
          </div>
        </nav>
      </StyledHeader>
    </>
  );
};
