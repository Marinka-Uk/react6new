import { useRouteError } from "react-router-dom"

export const ErrorPage = ()=>{
    const error = useRouteError()

    return (
        <>
        <p>Oops</p>
        <p>{error.error.message}</p>
        </>
    )
}