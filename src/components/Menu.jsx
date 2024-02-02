import React from "react";
import {Fetch} from './Fetch.jsx'
import '../components/menu.css'
import { Link } from "react-router-dom";


const Pemesanan = () => {
    return(
        <div>
            <h1 className="menu-title">Hotel Name: </h1>
            <Fetch/>
            <div></div>
            
        </div>
    )
}

export default Pemesanan;