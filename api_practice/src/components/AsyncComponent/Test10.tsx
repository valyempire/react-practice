//  1. Using this API "https://fakestoreapi.com/products" when App mounts, set the state with only the
// products with price lover and equal 100 using axios or async await
//  2. Display on the screen in an unordered list the name of the products
//  3. Create a delete button to delete the each products from the list
//  4. Create a button to add a new product when we write the product in the input
//  5. Create an controled input who must display only the name of the products who starts with what we type in the input
//  6. On mount, focus the input
//  7. Add a button which toggles the disabled state of our input, please do this using a custom hook which will be called useToggle
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useToggle } from "./useToggle";

interface Products {
  title: string;
  price: number;
  id: number;
}

const url = "https://fakestoreapi.com/products";

export const Test10 = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isOpen, handleToggleInput } = useToggle();

  const fetchData = async () => {
    const response = await axios.get<Products[]>(url);
    const data = response.data.filter((product) => product.price <= 100);
    console.log(data);
    setProducts(data);
  };

  const handeDelete = (id: number) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const addProducts = (value: string) => {
    const newProduct = [
      ...products,
      { title: value, price: 100, id: products.length + 1 },
    ];
    setProducts(newProduct);
  };

  const filteredProduct = products.filter((product) =>
    product.title.toLowerCase().startsWith(inputValue.toLowerCase())
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addProducts(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    void fetchData();
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          style={{ marginLeft: "10px" }}
          ref={inputRef}
          disabled={isOpen}
        />
        <button type="submit">Add Products</button>
      </form>
      <button onClick={handleToggleInput}>Toggle </button>
      <ul>
        {filteredProduct.map((product) => (
          <div key={product.id}>
            <li key={product.id}>
              {product.title} with price : {product.price}
            </li>
            <button onClick={() => handeDelete(product.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};
