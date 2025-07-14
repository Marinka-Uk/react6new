import { NavLink } from "react-router-dom";

export const MainPage = () => {
  return <>
      <header>
        <ul>
          <li>
            <NavLink to='./' >Home</NavLink>
            <li>
              <NavLink to='./movies'>To movies</NavLink>
            </li>
          </li>
        </ul>
      </header>
    </>
};
