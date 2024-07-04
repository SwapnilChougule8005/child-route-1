import { Link } from "react-router-dom";

const Utilities = () => {
    return (
        <div>
            <h1>Utilities page here</h1>
            <Link  to='/css'>create RoutesFromChildren</Link>
            <Link to='/css'>createRoutesFromElement</Link>
            <Link to='/css'>createSearchParams</Link>
            <Link to='/css'>defer</Link>
        </div>
    )
}
export default Utilities;