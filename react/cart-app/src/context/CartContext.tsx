/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useCallback, useState } from "react";

export const CartContext = createContext({
  formValues: {
    name: "",
    price: "",
    quantity: "",
  },
  products: [] as ProductTypes[],
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => {},
});

interface ProductTypes {
  name: string;
  price: string;
  quantity: string;
}

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [formValues, setFormValues] = useState<ProductTypes>({
    name: "",
    price: "",
    quantity: "",
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    },
    [formValues]
  );

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
    <CartContext.Provider
      value={{ formValues, handleChange, handleOnSubmit, products }}
    >
      {children}
    </CartContext.Provider>
  );
};
