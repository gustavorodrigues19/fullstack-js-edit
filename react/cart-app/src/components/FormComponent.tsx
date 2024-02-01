import { useContext } from "react";
import { CartContext } from "../context/CartContext";

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

export default FormComponent;
