import React, {useRef, useState} from "react"
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function Login() {
    const data = useRef()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials= true;
    const handleSubmit= (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/login', {email, password})
        .then (res => {console.log(res)
        localStorage.setItem ("user",data.current.value)
    if (res.data === "Success")
    { navigate ('/home')}
    else {
        alert("Incorrect Password or Email Id")
    }})
    .catch( err=> console.log(err))
    }

return (
    <div className="bg-info bg-gradient d-flex justify-content-center text-uppercase align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email">
                    Email
                </label>
                <input ref={data} type='email' placeholder="Enter email" autoComplete="off" name="email" className="form-control rounded-1" onChange={(e)=> setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" placeholder="Enter Password" name="password" className="form-control rounded-1" onChange={(e)=> setPassword (e.target.value)} />
            </div>

            <button type='submit' className="btn btn-success w-100 rounded-1">Login</button>
            </form>

            <p>Already Have an Account?</p>

            <Link to="/" className="btn btn-danger border btn-lg w-100 rounded-1 text-decoration-none">Sign Up</Link>
        </div>
    </div>
)
}

export default Login;