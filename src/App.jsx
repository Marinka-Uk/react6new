
import { TaskList } from "./Components/TaskList/TaskList";
import { TaskForm } from "./Components/TaskForm/TaskForm";
import { useDispatch } from "react-redux";
import { getAllTasks } from "./redux/Operation/Operation";
import { addTasks } from "./redux/Slices/TaskSlice";
import { useEffect } from "react";



export const App =()=>{

  const dispatch = useDispatch()
useEffect(()=>{dispatch(getAllTasks())

},[dispatch]
)
  const handleClick=()=>{
    dispatch(addTasks({
      id: 5,
      text: 'My new task',
      completed: false,
    }))
  }

  return <>
  <h1>
    Redux
  </h1>
  <TaskList/>
  <TaskForm/>
  <button onClick={handleClick}>додати завдання</button>
  </>
}
