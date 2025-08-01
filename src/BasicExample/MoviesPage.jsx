import { Link, useSearchParams } from "react-router-dom";

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams);
  return (
    <>
    <input onChange={(e)=>{
      setSearchParams({value: e.target.value})
    }} value={searchParams.get('value') ?? ''} type="text"/>
    <button onClick={()=>{
      setSearchParams({a: 5})
    }} type="submit">Пошук</button>
  
      <ul>
        <li>
          <Link to="/movie/1">
            Harry Potter and the Philosopher's Stone
          </Link>
        </li>
        <li>
          <Link to="/movie/2">
            Harry Potter and the Chamber of Secrets
          </Link>
        </li>
        <li>
          <Link to="/movie/3">
            Harry Potter and the Prisoner of Azkaban
          </Link>
        </li>
      </ul>
    </>
  );
};