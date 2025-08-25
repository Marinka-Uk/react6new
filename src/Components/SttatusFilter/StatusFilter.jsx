import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { filter } from "../../redux/action";
import { StatusFilter } from "../../redux/statusFilter";

export const StatusFilter = () => {

  const dispatch = useDispatch()

  return (
    <div className={css.wrapper}>
      <Button onClick={()=>{dispatch(filter())}}>All</Button>
      <Button onClick={()=>{dispatch(filter("Active"))}}>Active</Button>
      <Button onClick={()=>{dispatch(filter("Completed"))}}>Completed</Button>
    </div>
  );
};