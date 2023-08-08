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

  const handleCheckedTodo = (index: number) => {
    const newTodo = [...todos];
    newTodo[index].completed = !newTodo[index].completed;
    setTodos(newTodo);
  };

  const handleDeleteTodo = (index: number) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

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
        {todos.map((todo, index) => (
          <div>
            <div
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
            >
              <li key={todo.id}>{todo.title}</li>
            </div>
            <button onClick={() => handleCheckedTodo(index)}>
              {todo.completed ? "Completed" : "Incompleted"}
            </button>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};
