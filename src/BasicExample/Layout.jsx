import { NavLink, Outlet } from "react-router-dom"
export const Layout = ()=>{
    return <>
     <header>
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
                <li>
                  <NavLink to='/movies'>To movies</NavLink>
                </li>
              </li>
            </ul>
          </header>
<main>
   <Outlet/> 
</main>
          <footer>
            <p>Footer</p>
          </footer>
    </>
}