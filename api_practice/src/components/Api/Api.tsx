import axios from "axios";
import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
}

export const Api = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li style={{ marginLeft: 20, fontSize: 16 }} key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
