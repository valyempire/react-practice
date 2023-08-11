/* eslint-disable @typescript-eslint/no-misused-promises */
import axios from "axios";
import { useState, useEffect } from "react";

interface Data {
  id: number;
  body: string;
}

const url = "https://jsonplaceholder.typicode.com/comments";

export const Test2 = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    axios
      .get<Data[]>(url)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {data.map((ele) => (
          <li key={ele.id}>{ele.body}</li>
        ))}
      </ul>
    </div>
  );
};
