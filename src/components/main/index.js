import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './styles.css';

const Main = ()=>{
  
    return(
        <div className='main-content'>
            <Link to='/start'>main content</Link>
            <Outlet />
        </div>
    )
}

export default Main;