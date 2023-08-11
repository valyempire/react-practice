/* eslint-disable @typescript-eslint/no-misused-promises */
import axios from "axios";
import { useState } from "react";

interface Data {
  id: number;
  body: string;
}

const url = "https://jsonplaceholder.typicode.com/comments";

export const Test3 = () => {
  const [data, setData] = useState<Data[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get<Data[]>(url);
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {data.map((ele) => (
          <li key={ele.id}>{ele.body}</li>
        ))}
      </ul>
    </div>
  );
};
