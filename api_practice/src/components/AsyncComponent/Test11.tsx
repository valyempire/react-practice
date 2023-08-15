/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// Using this API "https://jsonplaceholder.typicode.com/todos" when App mounts, set the users state with only the
// first 10 todos using axios and then try with async await also use the interface from above for the todos
// *
// Display on the screen the todos in an ordered list
// *
// Create a button who must display if the todo is completed or incompleted
// *
// When we click on the button if a todo shows is completed must change to incompleted
// *
// Using css inline when we click to button to a completed todo must be marked by a line
// *
// Create a delete button which will delete each todo

import { useState, useEffect } from "react";
import axios from "axios";

interface TodoInterface {
  id: number;
  title: string;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const Test11 = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const changeStatus = (index: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const newButton = [...todos];
    newButton[index].completed = !newButton[index].completed;
    setTodos(newButton);
  };

  //   const deleteButton = (id: number) => {
  //     const filteredButton = todos.filter((todo) => todo.id !== id);
  //     setTodos(filteredButton);
  //   };

  const deleteButton = (index: number) => {
    const deletebutton = [...todos];
    deletebutton.splice(index, 1);
    setTodos(deletebutton);
  };

  useEffect(() => {
    axios
      .get<TodoInterface[]>(url)
      .then((response) => {
        setTodos(response.data.slice(0, 10));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ol>
        {todos.map((todo, index) => (
          <div style={{ textDecoration: todo.completed ? "line-through" : "" }}>
            <li key={todo.id}>{todo.title}</li>
            <button onClick={() => changeStatus(index)}>
              {todo.completed ? "Completed" : "Incompleted"}
            </button>
            <button onClick={() => deleteButton(index)}>Delete</button>
          </div>
        ))}
      </ol>
    </div>
  );
};
