// 1. Using this API : https://jsonplaceholder.typicode.com/albums/1/photos, set the photos state with only the
// using axios and then try with async await also use the interface from above for the photos.

// 2  .Display on the screen the photos in an ordered list

// 3.  We have a controlled input for searching and displaying typing into it will show matches based on the id we fetched previously.

// 4.  Includes a button for deleting the photos.

// 5.  Add a button which toggles the disabled state of our input, please do this using a custom hook which will be called useToggle

// 6.  On mount, focus the input

// 7.  Add localstorage usin a custom hook which will be called useLocalStorage

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useToggle } from "./useToggle";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
const url = "https://jsonplaceholder.typicode.com/albums/1/photos";

export const Test7: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const { isOpen, handleToggleInput } = useToggle();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const filteredPhotos = inputValue
    ? photos.filter((photo) => photo.id === Number(inputValue))
    : photos;

  //   const deletePhotos = (index: number) => {
  //     const newPhotos = [...photos];
  //     newPhotos.slice(index, 1);
  //     setPhotos(newPhotos);
  //   };

  const deletePhotos = (id: number) => {
    const updataPhotos = photos.filter((photo) => photo.id !== id);
    setPhotos(updataPhotos);
  };

  //AXIOS
  //   useEffect(() => {
  //     axios
  //       .get<Photo[]>(url)
  //       .then((response) => {
  //         const data = response.data;
  //         console.log(data);
  //         setPhotos(data);
  //       })
  //       .catch((err) => console.log(err));

  //   }, []);

  //ASYNC AWAIT

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<Photo[]>(url);
        setPhotos(response.data.carts);
      } catch (err) {
        console.log(err);
      }
    };
    void getData();
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        style={{ marginLeft: "50px" }}
        disabled={isOpen}
        ref={inputRef}
      />
      <button onClick={handleToggleInput}>Toggle Input</button>
      <ol>
        {filteredPhotos.map((photo) => (
          <div>
            <li key={photo.id}>{photo.title}</li>
            <img src={photo.url} alt={photo.title} style={{ width: "100px" }} />
            <button onClick={() => deletePhotos(photo.id)}>Delete</button>
          </div>
        ))}
      </ol>
    </div>
  );
};
