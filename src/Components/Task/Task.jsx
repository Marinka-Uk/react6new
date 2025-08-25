import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

export const Task = ({ task }) => {
  return (
    <div className={css.wrapper}>
      <input
      onChange={()=> dispatch(chekTasks(task.id))}
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={()=> {
        dispatchEvent(deleteTasks(task.id))
      }} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
