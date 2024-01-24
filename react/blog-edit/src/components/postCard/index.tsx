import { Card, CardBody, CardText, CardTitle } from "reactstrap";

interface CardProps {
  imgUrl: string;
  title: string;
  description: string;
}

export function CardComponent({ title, description, imgUrl }: CardProps) {
  return (
    <Card
      style={{
        width: "18rem",
        padding: "15px",
      }}
    >
      <img
        alt="Sample"
        src={imgUrl}
        style={{ borderRadius: "10px", height: "rem" }}
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
      </CardBody>
      <CardText>{description}</CardText>
    </Card>
  );
}
