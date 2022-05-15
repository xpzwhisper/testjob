import styled from "styled-components";
export const StyledCard = styled.div`
  .card:hover {
    -webkit-box-shadow: 12px 12px 16px 8px rgba(0, 0, 0, 0.84);
    box-shadow: 12px 12px 16px 8px rgba(0, 0, 0, 0.84);
    background-color: #efef88;
  }
  .card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    border: 1px solid black;
    border-radius: 4px;
    width: 195px;
    height: 200px;
    background-color: #f5f5dc;
    margin: 15px 0;
    text-align: center;
    transition: box-shadow 0.5s, background-color 1.2s;
  }
  .card > * {
    width: 100%;
  }
  .card__product_image {
    display: block;
    max-width: 190px;
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
    align-items: stretch;
  }
  .header__cart {
    margin-right: 30px;
  }
`;
