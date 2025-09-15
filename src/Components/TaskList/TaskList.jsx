import { getFilter, getTasks } from "../../redux/selector";
// import { StatusFilter } from "../SttatusFilter/StatusFilter";
import { Task } from "../Task/task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import {statusFilters} from "../../redux/statusFilter"

export const TaskList = () => {


const tasks = useSelector(getTasks)
const status = useSelector(getFilter)

const visibleTask = (tasks, status)=>{
  switch (status){
    case statusFilters.active:
      return tasks.filter(task => !task.completed)
case  statusFilters.completed:
  return tasks.filter(task=> task.completed)

      default:
        return tasks
       
  }
}

const FilterTask = visibleTask(tasks, status)


  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};