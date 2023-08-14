// const url = "https://jsonplaceholder.typicode.com/photos";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface Image {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const Test4: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/photos";

    axios
      .get<Image[]>(url)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("A apărut o eroare: ", error);
      });
  }, []);

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.id} className="image-container">
          <p>{image.title}</p>
          <img src={image.thumbnailUrl} alt={image.title} />
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};
