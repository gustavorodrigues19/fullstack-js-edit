import { useState } from "react";
function CartItem(props) {
  return (
    <div
      style={{
        border: "1px solid #fff",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <div>Image here</div>
      <div>
        <h3>{props.name}</h3>
        <h3>Price: ${props.price}</h3>
      </div>
      <span onClick={props.handleRemove}>remove item</span>
    </div>
  );
}

const Cart = ({ cartItems }) => {
  const [items, setItems] = useState(cartItems);
  const handleRemove = (index) => {
    const arr = [...items];
    const filteredArr = arr.filter((_, key) => key !== index);
    setItems(filteredArr);
    console.log("remova index", index);
  };
  return (
    <div>
      {items.map((cartItem, index) => (
        <CartItem
          key={`${index}-${cartItem.name}`}
          name={cartItem.name}
          price={cartItem.price}
          handleRemove={() => handleRemove(index)}
        />
      ))}
    </div>
  );
};

const cartItems = [
  {
    name: "product 1",
    price: 100,
  },
  {
    name: "product 2",
    price: 200,
  },
  {
    name: "product 3",
    price: 300,
  },
];

export default function ConditionalRenderingPage() {
  const isCartEmpty = false;

  return (
    <div>
      {isCartEmpty ? <div>Cart empty</div> : <Cart cartItems={cartItems} />}
    </div>
  );
}
