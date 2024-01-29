import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";

interface PostDetailsProps {
  imgUrl: string;
  title: string;
  description: string;
}

export function PostDetails({ imgUrl, title, description }: PostDetailsProps) {
  return (
    <Card>
      <CardBody>
        <Row>
          <Col>
            <img alt="Sample" src={imgUrl} />
          </Col>
          <Col>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardText>{description}</CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
