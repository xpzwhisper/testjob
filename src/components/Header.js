import { StyledHeader } from "./Header.styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="header__main">
          <div className="header__title">This is title</div>
          <div className="header__cart">this is cart</div>
        </div>
        <nav className="header__navbar">
          <Link to={"/"}>
            <button className="header__navbar_button">Home</button>
          </Link>

          <Link to={"/form"}>
            <button className="header__navbar_button">Form</button>
          </Link>

          <Link to={"/products"}>
            <button className="header__navbar_button">Products</button>
          </Link>
        </nav>
      </StyledHeader>
    </>
  );
};
