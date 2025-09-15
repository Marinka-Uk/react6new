// import { Button } from "components/Button/Button";
import { MdAddTask } from "react-icons/md";
import css from "./TaskForm.module.css";
import { useDispatch } from "react-redux";
import {addTasks} from '../../redux/Slices/TaskSlice'

export const TaskForm = () => {
const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
      const newTask ={id: Date.now(), text: event.target.value, completed: false}
      dispatch(addTasks(newTask))
    form.reset();
  
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <button type="submit">Add task</button>
    </form>
  );
};
