import { StyledHeader } from "./Header.styled";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="header__title">This is title</div>
        <div className="header__cart">this is cart</div>
      </StyledHeader>
    </>
  );
};
