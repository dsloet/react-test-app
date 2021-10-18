import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    return (
        <header class="header">
            <div class="left">
                <ul class="navbar">

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/example">Example</Link>
                    </li>
                </ul>

            </div>

        </header>
    );
}
export default Navbar;