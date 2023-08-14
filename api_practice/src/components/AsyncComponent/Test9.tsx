/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useToggle } from "./useToggle";

const url = "https://fakestoreapi.com/products";

interface Products {
  id: number;
  title: string;
  price: number;
}

export const Test9: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [inputValue, setInputValue] = useState("");
  const { isOpen, handleToggleInput } = useToggle();
  const inputRef = useRef<HTMLInputElement | null>(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get<Products[]>(url);
  //         const data = response.data.filter((product) => product.price > 100);
  //         setProducts(data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     void fetchData();
  //   }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get<Products[]>(url);
      const data = response.data.filter((product) => product.price > 100);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleDelete = (id: number) => {
    const filteredButton = products.filter((product) => product.id !== id);
    setProducts(filteredButton);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const filteredInput = products.filter((product) =>
    product.title.toLowerCase().startsWith(inputValue.toLowerCase())
  );

  return (
    <div>
      <h1>Products over 100 $</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        disabled={isOpen}
        ref={inputRef}
      />
      <button onClick={handleToggleInput}>Toggle</button>
      <ul>
        {filteredInput.map((product) => (
          <div>
            <li key={product.id}>
              {product.title} - {product.price}
            </li>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </ul>
      <button onClick={fetchData}>Open List</button>
    </div>
  );
};
