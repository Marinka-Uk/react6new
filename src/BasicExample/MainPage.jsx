import { NavLink } from "react-router-dom";

export const MainPage = () => {
  return <>
      <h1>
      hello
      </h1>
      <ul>
      <li>
        <NavLink to="/movie/1">Harry Potter and the Philosopher's Stone</NavLink>
      </li>
      <li>
        <NavLink to="/movie/1">Harry Potter and the Chamber of Secrets</NavLink>
      </li>
      <li>
        <NavLink to="/movie/1">Harry Potter and the Prisoner of Azkaban</NavLink>
      </li>
    </ul>
    </>
};
