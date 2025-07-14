import { createBrowserRouter } from "react-router-dom";
import { Movies } from "./movies";
import { MainPage } from "./mainPage";
import { MoviesPage } from "./MoviesPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>

    },
    {
        path: '/movies',
        element: <MoviesPage/>,
    }
])