import styled from "styled-components";
export const StyledCard = styled.div`
  .card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    border: 1px solid black;
    border-radius: 4px;
    width: 200px;
    height: 200px;
    background-color: beige;
    margin: 15px 0;
    text-align: center;
  }
  .card > * {
    width: 100%;
  }
  .card__product_image {
    display: block;
    max-width: 220px;
    max-height: 130px;
    height: auto;
    width: auto;
  }
  .card__product_name {
    font-size: 1.2em;
    font-weight: bold;
  }
  .card__info {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .header__cart {
    margin-right: 30px;
  }
`;
