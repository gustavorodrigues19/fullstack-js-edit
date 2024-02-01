import { useContext, useRef } from "react";
import "./App.css";
import { CartContext, ContextProvider } from "./context/CartContext";
import FormComponent from "./components/FormComponent";

interface ProductTypes {
  name: string;
  price: string;
  quantity: string;
}

const ProductComponent = ({ name, price, quantity }: ProductTypes) => {
  return (
    <div
      style={{
        height: "100px",
        width: "200px",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

const ProductList = () => {
  const { products } = useContext(CartContext);

  return (
    <div>
      {products.map((product, index) => (
        <ProductComponent
          key={index}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};

function App() {
  const ref = useRef<HTMLInputElement>(null);

  const handleWithRef = () => {
    ref.current?.setAttribute("style", "color: red");
  };

  return (
    <div
      onClick={() => handleWithRef()}
      style={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 ref={ref}>Shopping list 2.0</h1>
      <div>
        <ContextProvider>
          <FormComponent />
          <ProductList />
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
