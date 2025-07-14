import { NavLink } from "react-router-dom";
export const MoviesPage = () => {
  return <>
      <header>
        <ul>
          <li>
            <NavLink to='/' >Home</NavLink>
            </li>
            <li>
              <NavLink to='/movies'>To movies</NavLink>
            </li>
        </ul>
      </header>
      <h1>All Movie</h1>
    </>
};