import { Task } from "../Task/task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";

export const TaskList = () => {


const tasks = useSelector(state =>state.tasks)


  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};