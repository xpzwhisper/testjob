import { StyledError } from "./Error.styled";
import { Row, Column } from "./helpers/Grid";

export const Error = () => {
  return (
    <Row>
      <Column>
        <StyledError>
          <div>Sorry you have requested an incorrect URL</div>
        </StyledError>
      </Column>
    </Row>
  );
};
