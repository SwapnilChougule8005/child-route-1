import { Link } from "react-router-dom";

const Routers = () => {
    return (
        <div>
            <h1>Route page here</h1>
            <Link  to='/css'>Picking a Router</Link>
            <Link to='/css'>createBrowserRouter</Link>
            <Link to='/css'>createHashRouter</Link>
            <Link to='/css'>RouterProvider</Link>
        </div>
    )
}
export default Routers;