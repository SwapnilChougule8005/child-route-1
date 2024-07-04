import React from 'react';
import { Link, Outlet } from "react-router-dom"
import './styles.css'

const SideBar = ()=>{
  
    return(
        <div className='sidebar'>
            <Link to='/start/getting'>Getting Started</Link>
            <Link to='/start/upgrading'>Upgrading</Link>
            <Link to='/start/routers'>Routers</Link>
            <Link to='/start/hooks'>Hooks</Link>
            <Link to='/start/route'>Route</Link>
            <Link to='/start/utilities'>Utilities</Link>
            <Outlet />
        </div>
    )
}

export default SideBar;