import { StyledHome } from "./Home.styled";
import { Row, Column } from "./helpers/Grid";

export const Home = () => {
  return (
    <StyledHome>
      <Row>
        <Column>
          <div>We love React!</div>
        </Column>
      </Row>
    </StyledHome>
  );
};
