import { Link } from "react-router-dom";

const Route = () => {
    return (
        <div>
            <h1>Route page here</h1>
            <Link  to='/start/route/Route'>Route</Link>
            <Link to='/start/route/action'>action</Link>
            <Link to='/start/route/error'>ErrorElement</Link>
            <Link to='/start/route/lazy'>lazy</Link>
            <Link to='/start/route/loader'>loader Consepts</Link>
        </div>
    )
}
export default Route;