import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
}

export const FetchApi = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Eroare la preluarea datelor:", error);
      }
    };

    void fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
