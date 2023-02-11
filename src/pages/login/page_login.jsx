import React from "react";
import {useState, useContext} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { AuthContext } from "../../context/authContext";

export const Login = () => {
    const [inputs, setInputs] = useState ({
        username: "",
        email: "",
        password: "",
    })
    const [err, setError] = useState(null)
    const navigate = useNavigate()

    const {login} = useContext(AuthContext);

    const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await login(inputs)
            // await axios.post("/auth/login", inputs)
            navigate("/")
        } catch(err) {
            setError(err.response.data)
        }
    }

    return (
        <div className = "login">
            <input required type = "text" placeholder = 'username' name = 'username' onChange = {handleChange} />
            <input required type = "password" placeholder = 'password' name = 'password' onChange={handleChange} />
            <button onClick = {handleSubmit}> Login </button>
            <Link to = "/register">
                Don't have an account? Register here
            </Link>
        </div>
    )      
}