import { StyledHeader } from "./Header.styled";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="header__main">
          <div className="header__title">Products inventory</div>
          <div className="header__cart">
            <ShoppingCartOutlined style={{ fontSize: "150%" }} />
          </div>
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
