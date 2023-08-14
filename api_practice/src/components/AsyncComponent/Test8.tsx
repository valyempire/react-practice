import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

interface Comments {
  id: number;
  name: string;
}

/**
 * 1 .Using axios, when App mounts, set the users state with API endpoint: "https://jsonplaceholder.typicode.com/users" 
 *
 * 2 . Display on the screen in a list the Users
 *
 * 3. Create a delete button to delete the each user
 *
 * 4.  Create a form with an input
 *
 * 5. Create a button to add a new user when we write the user in the input
 *
 *

 */

export const Test8 = () => {
  const [comments, setComments] = useState<Comments[]>([]);
  const [inputValue, setInputValue] = useState("");

  const deleteComment = (id: number) => {
    const updateComment = comments.filter((comment) => comment.id !== id);
    setComments(updateComment);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    axios
      .get<Comments[]>(url)
      .then((resp) => setComments(resp.data))
      .catch((err) => console.log(err));
  }, []);

  const addnewTodo = (value: string) => {
    const newTodo = [...comments, { id: comments.length + 1, name: value }];
    setComments(newTodo);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.length > 0) {
      addnewTodo(inputValue);
    }
    setInputValue("");
  };

  return (
    <div>
      <h2>Comments List:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {comments.map((comment) => (
          <div key={comment.id}>
            <li key={comment.id}>{comment.name}</li>
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};
