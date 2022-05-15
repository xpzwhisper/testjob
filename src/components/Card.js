import { StyledCard } from "./Card.styled";
import { Column } from "./Grid";

export const Card = ({ name, price, image, id }) => {
  const imageURL = URL.createObjectURL(image);
  return (
    <>
      <Column xs="12" sm="4" md="3" lg="3">
        <StyledCard>
          <div key={id} className="card">
            <img className="card__product_image" src={imageURL} alt="" />
            <div className="card__info">
              <label className="card__label">Name:</label>
              <h2 className="card__product_name"> {name}</h2>
            </div>
            <div className="card__info">
              <label className="card__label">Price:</label>
              <h2 className="card__product_price">{price}</h2>
            </div>
          </div>
        </StyledCard>
      </Column>
    </>
  );
};
