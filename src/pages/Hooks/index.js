import { Link } from "react-router-dom";
import './styles.css'
const Hooks = () => {
    return (
        <div className="hooks">
            <h1>Hooks page here</h1>
            <Link  to="/start/hooks/usestate">useState</Link>
            <Link to="/start/hooks/useeffect">useEffect</Link>
            <Link to="/start/hooks/useLocation">useLocation</Link>
            <Link to="/start/hooks/useNavigate">useNavigate</Link>
            <Link to="/start/hooks/useparams">useparams</Link>
        </div>
    )
}
export default Hooks;