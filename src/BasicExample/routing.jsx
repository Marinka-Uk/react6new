import { createBrowserRouter } from "react-router-dom";
import {  MainPage } from "./MainPage";
import {Layout} from "./Layout"
import { MoviesPage } from "./MoviesPage";
import { Movie } from "./Movie";
import { fetchMovieDetails } from "./fetch";
import { ErrorPage } from "./errorPage";
import { Rewiev } from "./Rewiev";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/movies",
        element: <MoviesPage />,
      },
      {
         path: "/movie/:id",
        element: <Movie/>,
        loader : fetchMovieDetails,
      },
      {
         path: "/movie/:movieId",
        element: <Movie/>,
        loader :fetchMovieDetails ,
        children: [{
    path: "/movie/:movieId/rewiev",
    element: <Rewiev/>,
        }]
      }
    ],
  },
]);
