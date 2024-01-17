import "./style.css";
import propTypes from "prop-types";

function ProductComponent(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
      <p>Description: {props.description}</p>
    </div>
  );
}

ProductComponent.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  description: propTypes.string.isRequired,
};

const productList = [
  {
    name: "Product 1",
    price: 100,
    description: "Description 1",
  },
  {
    name: "Product 2",
    price: 200,
    description: "Description 2",
  },
  {
    name: "Product 3",
    price: 300,
    description: "Description 3",
  },
];

export default function ComponentsPropsPage() {
  return (
    <div>
      <h1>Components & Props</h1>
      {productList.map((product, index) => (
        <ProductComponent
          name={product.name}
          price={product.price}
          description={product.description}
          key={`${index}-${product.name}`}
        />
      ))}
    </div>
  );
}
