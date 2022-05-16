import styled from "styled-components";
export const StyledCard = styled.div`
  .card:hover {
    -webkit-box-shadow: 6px 7px 23px 3px rgba(0, 0, 0, 0.47);
    box-shadow: 6px 7px 23px 3px rgba(0, 0, 0, 0.47);
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
  .card__image_placeholder {
    display: flex;
    justify-content: center;
    height: 130px;
  }
  .card__product_image {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
  .card__product_name,
  .card__product_price {
    /* font-size: 1.1em; */
    font-weight: bold;
    margin-left: 2px;
  }
  .card__product_info {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    /* align-items: stretch; */
  }
  .card__product_info_bottom {
    width: 75.2%;
  }
  .card__addToCart {
    width: 12%;
    font-size: 1.7em;
    position: relative;
    height: 20px;
    color: #444;
    /* top: 15px; */
    transition: font-size 0.5s, color 0.5s;
  }
  .card__addToCart:hover {
    color: #6e0;
    cursor: pointer;
  }
  .card__product_delete {
    width: 12%;
    height: 18px;
    position: relative;
    bottom: 190px;
    left: 42px;
    transition: color 0.5s;
    align-items: center;
    font-size: 1.8em;
    color: #444;
  }
  .card__product_delete:hover {
    color: red;

    cursor: pointer;
  }
`;
