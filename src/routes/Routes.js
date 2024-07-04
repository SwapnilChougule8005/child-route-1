import { createBrowserRouter} from 'react-router-dom'
import {Getting,Routers,Upgrading, Utilities,Route,Hooks}  from '../pages'
import SideBar from '../components/sidebar';
import Feature from '../pages/Getting/Feature';
import Tutorial from '../pages/Getting/Tutorial';
import Examples from '../pages/Getting/Examples';

import UseState from '../pages/Hooks/UseState'
import UseEffect from '../pages/Hooks/UseEffect'
import Main from '../components/main';

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            
    {
        path:'start',
        element: <SideBar/>,
        children:[
            {
                path:'getting',
                element:<Getting/>,
                children:[
                    {
                        path:"feature",
                        element:<Feature/>
                    },
                    {
                        path:"tutorial",
                        element:<Tutorial/>
                    },
                    {
                        path:"examples",
                        element:<Examples/>
                    },
                ]
            },
            {
                path:'upgrading',
                element:<Upgrading/>
            },
            {
                path:'hooks',
                element:<Hooks/>,
                children:[
                    {
                        path:"usestate",
                        element:<UseState/>,
                    },
                    {
                        path:"useeffect",
                        element:<UseEffect/>,
                    }
                ]
            },
            {
                path:'route',
                element:<Route/>
            },
            {
                path:'utilities',
                element:<Utilities/>
            },
            {
                path:'routers',
                element:<Routers/>
            },
        ]
        },
        ]
    },
    {
        path:"*",
        element:<h1>page not found</h1>
    }
])
export default routes;