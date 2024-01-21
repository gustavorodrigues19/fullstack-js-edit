export function CardComponent(props) {
  return (
    <div className="exercises-card-container">
      <img src={props.image} alt="img" />
      <h3>{props.title} </h3>
      <p>{props.description} </p>
    </div>
  );
}
