import { Outlet, useLoaderData, useParams, Link } from "react-router-dom";


export const Movie = () => {
   const movieDetails = useLoaderData()
   const params = useParams()
  return (
    <>
      <h1>{movieDetails.name}</h1>
      <p>Here you cfn display the details of the movie.</p>
      <Link to = "/movie/:movieId/rewiev">Rewiev</Link>
      <Outlet/>
    </>
  );
};
