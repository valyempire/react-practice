/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

/**
 
Using fetch or axios, when App mounts, set the users state with only the name of the user
API endpoint: https://jsonplaceholder.typicode.com/users
Expected: An array of strings (the names of the users) ["John", "Bob", ... ]
*

 
We have a controlled input, typing into it will show matches based on the user names we fetched previously
Eg: type in "Ad", we should see at least one match "Adam", "Adrian" ... and so on
*
Clearing the input will hide all suggestions that matched.
Clicking on a suggestion will fill the input with that suggestion.
On mount, focus the input
Center the input and the suggestions
Add a button which toggles the disabled state of our input, please do this using a custom hook which will be called useToggle
*/
interface Contact {
  name: string;
  id: number;
}

const url = "https://jsonplaceholder.typicode.com/users";

const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  return [value, toggle] as const;
};

export const Test5: React.FC = () => {
  const [contacts, setContacts] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  // const [inputDisabled, toggleInputDisabled] = useToggle(false);
  const [value, toggle] = useToggle(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [reset, setReset] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get<Contact[]>("https://jsonplaceholder.typicode.com/users")
  //     .then((response: { data: Contact[] }) =>
  //       setContacts(response.data.map((contact) => contact.name))
  //     )
  //     .catch((err) => console.log(err));
  // }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<Contact[]>(url);
        setContacts(response.data.map((contact) => contact.name));
      } catch (err) {
        console.log(err);
      }
    };
    void getData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = contacts.filter((contact) =>
    contact.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const handleSuggestionClick = (suggestion: string) => {
    setSearch(suggestion);
  };

  const handleReset = () => {
    setSearch("");
    setReset(!reset);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="container">
      <div style={{ marginLeft: "20px" }}>
        <input
          ref={inputRef}
          value={search}
          onChange={handleChange}
          type="text"
          className="autocomplete"
          disabled={value}
        />
        <button onClick={toggle}>Toggle Input</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <ul>
        {handleSearch.map((contact, index) => {
          return (
            <li key={index} onClick={() => handleSuggestionClick(contact)}>
              {contact}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
