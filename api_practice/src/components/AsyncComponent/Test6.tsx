/**
 * 
 * 
 * export interface TodoInterface {
  id: number;
  title: string;
  completed: boolean;
}

 *
 * 1. Using this API "https://jsonplaceholder.typicode.com/todos" when App mounts, set the users state with only the
 * first 10 todos using axios and then try with async await also use the interface from above for the todos
 *
 * 2. Display on the screen the todos in an ordered list
 *
 * 3. Create a button who must display if the todo is completed or incompleted
 *
 * 4. When we click on the button if a todo shows is completed must change to incompleted
 *
 * 5. Using css inline when we click to button to a completed todo must be marked by a line
 *
 * 6. Create a delete button which will delete each todo
 *
 *
 *
 */
/**
 * 
 * 
 interface Products {
  id: number;
  title: string;
  price: number;
}
 */

//  1. Using this API "https://fakestoreapi.com/products" when App mounts, set the state with only the
// products with price over 100 using axios or async await

//  2. Display on the screen in an unordered list the name of the products also near the name the price
//  3. Create a delete button to delete the each products from the list
//  4. Create an controled input who must display only the name of the products who starts with what we type in the input
//  5.  On mount, focus the input
//  6. Add a button which toggles the disabled state of our input, please do this using a custom hook which will be called useToggle
//  7. Remove the useEffect and create a button , when we press the buton to display on the screen the result from the fetch api
