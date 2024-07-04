import { Link } from "react-router-dom";

const Upgrading = () => {
    return (
        <div>
            <h1>Upgrading page here</h1>
            <Link  to='/start/upgrading/current-future'>Current Future Flag</Link>
            <Link to='/start/upgrading/current-future'>Mingrading to RouterProvider</Link>
            <Link to='/start/upgrading/current-future'>Upgrading  from v5</Link>
            <Link to='/start/upgrading/current-future'>Mingrading from @react/router</Link>
        </div>
    )
}
export default Upgrading;