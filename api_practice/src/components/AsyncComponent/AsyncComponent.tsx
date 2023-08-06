// /* eslint-disable @typescript-eslint/no-unsafe-member-access */
// import { useEffect, useState } from "react";
// import axios from "axios";

// export interface FetchData {
//   id: number;
//   title: string;
// }

// export const AsyncComponent = () => {
//   const [fetchedData, setFetchedData] = useState<FetchData[]>([]);

//   useEffect(() => {
//     const getData = async () => {
//       const resp = await axios.get<FetchData[]>(
//         "https://jsonplaceholder.typicode.com/todos/"
//       );
//       const data = resp.data;
//       setFetchedData(data);
//     };
//     void getData();
//   }, []);

//   console.log("data: ", fetchedData);

//   return (
//     <div className="App">
//       <h1>test</h1>
//       {fetchedData ? <h2>title: {fetchedData.title}</h2> : null}
//     </div>
//   );
// };
