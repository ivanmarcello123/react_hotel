import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/form.css'




const Form = () =>{

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [imageLink, setImageLink] = useState('')
    const navigate = useNavigate()

    const HandleSubmit = (e) =>{
        e.preventDefault()
        const menu = {name, price, imageLink}

        fetch('http://localhost:3030/product', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(menu)
        }).then(()=>{
            console.log("New menu added")
        }).then(()=>{
            navigate("/recipe")
        })
    }   

    const handleCancel = () =>{
        navigate("/recipe")
    }

    return(
        <form onSubmit={HandleSubmit} className="form-container">
            <label>hotel Name:</label>
            <input 
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <label>Price:</label>
            <input 
            type="text"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
            <label>Image Link:</label>
            <input 
                type="link"
                required
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
            />
            <button className="formSubmit">Add Menu</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
    )
}

export default Form