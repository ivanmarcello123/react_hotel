import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import logo from '../assets/hotel-removebg-preview.png';

function Navbar(){
    return(
        <nav>
        <ul>
           <img src={logo} className="img"/> 
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/pemesanan">Pemesanan</Link>
            </li>
            {/* <li>
                <Link to="/form">Form</Link>
            </li> */}
        </ul>
        </nav>

    )
}

export default Navbar