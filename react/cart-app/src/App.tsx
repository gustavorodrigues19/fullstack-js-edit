/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useState } from "react";
import "./App.css";

interface ProductTypes {
  name: string;
  price: string;
  quantity: string;
}

const CartContext = createContext({
  formValues: {
    name: "",
    price: "",
    quantity: "",
  },
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => {},
});

const FormComponent = () => {
  const { formValues, handleChange, handleOnSubmit } = useContext(CartContext);

  return (
    <form style={{ marginBottom: "20px" }} onSubmit={handleOnSubmit}>
      {JSON.stringify(formValues)}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formValues.name}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          name="price"
          onChange={handleChange}
          value={formValues.price}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="text"
          name="quantity"
          onChange={handleChange}
          value={formValues.quantity}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

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

function App() {
  const [formValues, setFormValues] = useState<ProductTypes>({
    name: "",
    price: "",
    quantity: "",
  });

  const [products, setProducts] = useState<ProductTypes[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProducts([...products, formValues]);
    setFormValues({
      name: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Shopping list</h1>
      <div>
        <CartContext.Provider
          value={{ formValues, handleChange, handleOnSubmit }}
        >
          <FormComponent />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {products.map((product, key) => (
              <ProductComponent
                key={key}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </div>
        </CartContext.Provider>
      </div>
    </div>
  );
}

export default App;
