import { createBrowserRouter } from "react-router-dom";
import { Movies } from "./movies";
import { MainPage } from "./mainPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>

    },
    {
        path: '/movies',
        element: <Movies/>,
    }
])