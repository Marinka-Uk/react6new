import { useDispatch } from "react-redux";
import {addTascks} from './redux/store'

export const App = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addTascks({
         id: 5, 
         text: "My new task", 
         completed: false
         }))
  };

  return (
    <>
      <h1>Redux</h1>
      <button onClick={handleClick}>додати завдання</button>
    </>
  );
};
