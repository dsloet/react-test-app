import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './sideMenu';
import { logout } from "./firebaseSettings";

import "./Navbar.css"

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>

                        );
                    })}
                    <button className='logout__btn' onClick={logout}>
                        Logout
                    </button>
                </ul>

            </nav>
        </>
    );
}

export default Navbar;



// import React from 'react';
// import { Link } from "react-router-dom";
// import "./Navbar.css"
// const Navbar = () => {
//     return (
//         <header class="header">
//             <div class="left">
//                 <ul class="navbar">

//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/example">Example</Link>
//                     </li>
//                 </ul>

//             </div>

//         </header>
//     );
// }
// export default Navbar;