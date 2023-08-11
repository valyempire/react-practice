import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: number;
  name: string;
}

export const Test = () => {
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>(url);
        const data = response.data;
        setUserData(data);
      } catch (err) {
        console.log(err);
      }
    };
    void fetchData();
  }, []);

  return (
    <div>
      <h1>Users List</h1>

      <ul>
        {userData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
