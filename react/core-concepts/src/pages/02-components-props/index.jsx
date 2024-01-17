import "./style.css";

function ProductComponent(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
      <p>Description: {props.description}</p>
    </div>
  );
}

const productList = [
  {
    name: "Product",
    price: 100,
    description: "Description 1",
  },
  {
    name: "Product",
    price: 200,
    description: "Description 2",
  },
  {
    name: "Product",
    price: 300,
    description: "Description 3",
  },
];

export default function ComponentsPropsPage() {
  return (
    <div>
      <h1>Components & Props</h1>
      {productList.map((product, index) => {
        console.log(`${index}-${product.name}`);
        return (
          <div key={`${index}-${product.name}`}>
            <ProductComponent
              name={product.name}
              price={product.price}
              description={product.description}
            />
          </div>
        );
      })}
    </div>
  );
}
