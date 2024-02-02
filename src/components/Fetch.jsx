import React, { useEffect, useState } from "react";
// import menu from '../database/menu.json'
import './fetch.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


export const Fetch = () => {

    const [menu, setMenu] = useState([])
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3030/product")
            .then((res) => res.json())
            .then((json) => setMenu(json))
    }, [])

    const handleDelete = (itemId) => {
        fetch(`http://localhost:3030/product/${itemId}`, {
            method: 'DELETE'
        })
            .then(() => {
                setMenu(menu.filter(item => item.id !== itemId))
            })
            .catch(error => {
                console.error('Error deleting item:', error)
            })
    }

    return (
        <div>
            <div>
                {menu.map((item) => (
                    <div className="container">
                        <div className="box">
                            <img src={item.img} alt="#"></img>
                            <h1 className="box-content">{item.name}</h1>
                            <h3 className="box-content">{item.price}</h3>
                            {/* <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                            <button><Link to={`/update${item.id}`}>Update</Link></button> */}
                            <div className="button-container">
                                <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                                {/* <button><Link to={`/update${item.id}`}>Update</Link></button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}