import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const url = "https://jsonplaceholder.typicode.com/todos";

export interface TodoInterface {
  id: number;
  title: string;
  completed: boolean;
}

/**
 *
 * 1. Using this API "https://jsonplaceholder.typicode.com/todos" when App mounts, set the users state with only the
 * first 10 todos using axios and then try with async await also use the interface from above for the todos
 *
 * 2. Display on the screen the todos in an ordered list
 *
 * 3. Create a button who must display if the todo is completed or incompleted
 *
 * 4. When we click on the button if a todo shows is completed must change to incompleted
 *
 * 5. Using css inline when we click to button to a completed todo must be marked by a line
 *
 * 6. Create a delete button which will delete each todo
 *
 *
 *
 */

export const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);
  const [inputValue, setInputValue] = useState("");

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addnewTodo = (value: string) => {
    const newTodo = [
      ...todos,
      { id: todos.length + 1, title: value, completed: false },
    ];
    setTodos(newTodo);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.length > 0) {
      addnewTodo(inputValue);
    }
    setInputValue("");
  };

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await axios.get<TodoInterface[]>(url);
        setTodos(response.data.slice(0, 10));
        console.log(response.data.slice(0, 10));
      } catch (err) {
        console.log(err);
      }
    };
    void getTodos();
  }, []);

  return (
    <div className="app">
      <ul>
        {todos.map((todo, index) => (
          <div key={todo.id}>
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

      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
