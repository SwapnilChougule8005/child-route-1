import { Link } from "react-router-dom";
import './styles.css';

const Getting = () => {
    return (
        <div className="page-content">
            <h1 className="page-title">getting page here</h1>
            <div className="page-link">
                 <Link  to='/start/getting/feature'>Feature Overview</Link>
                 <Link to='/start/getting/tutorial'>Tutorial</Link>
                 <Link to='/start/getting/examples'>Examples</Link>
                 <Link to='/start/getting/FaQs'>FaQs</Link>
                 <Link to='/start/getting/MainConsepts'>Main Consepts</Link>
            </div>
        </div>
    )
}
export default Getting;