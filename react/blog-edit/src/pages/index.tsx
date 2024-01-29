import { Col, Container, Row } from "reactstrap";
import { CardComponent } from "../components/postCard";
import useRootPage from "../hooks/useRootPage";

function RootPage() {
  const { postsList, handleCardClick } = useRootPage();

  return (
    <Container>
      <Row lg="4">
        {postsList.map((card) => (
          <Col key={card.id}>
            <CardComponent
              id={card.id}
              imgUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              handleCardClick={handleCardClick}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RootPage;
