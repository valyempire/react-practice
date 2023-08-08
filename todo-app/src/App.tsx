import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos";

export interface TodoInterface {
  id: number;
  title: string;
  completed: boolean;
}

export const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await axios.get<TodoInterface[]>(url);
        setTodos(response.data.slice(0, 10));
        // setTodos(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    void getTodos();
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};
