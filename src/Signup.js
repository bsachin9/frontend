import React,{ useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


function Signup () {
    const [name, setName] = useState()
    const [dob, setDob] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleUserSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/register',{name,dob,email,password})
        .then (res=>{
            navigate('/login')
        })
        .catch(err=> console.log(err))
    }

return (
    <div className="bg-info bg-gradient d-flex justify-content-center align-items-center vh-100 text-uppercase">
        <div className="bg-white p-3 rounded w-25">
            <h2>Register</h2>
            <form onSubmit={handleUserSubmit}>
                <div className='mb-2'>
                    <label>
                        Name
                    </label>
                    <input type="text" placeholder='Enter name' autoComplete='off' name='name' className="form-control rounded-1" onChange={(e) => setName (e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label>
                        Date of Birth
                    </label>
                    <input type="date" placeholder='Enter Date of Birth' autoComplete='off' name='date' className='form-control rounded-1' onChange={(e)=> setDob(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <label>
                    Email
                    </label>
                    <input type='email' placeholder='Enter Email id' autoComplete='off' name='email' className='form-control rounded-1' onChange={(e)=> setEmail(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <label>
                        Password
                    </label>
                    <input type='password' placeholder='Enter Password' autoComplete='off' name='password' className='form-control rounded-1' onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type='submit' className='btn btn-success w-100 rounded-1'>Register</button>
            </form>

            <p><href src="">Already Have an Account?</href></p>
            <Link to='/login'>
                <button type='submit' className='btn btn-danger w-100 btn-lg rounded-1'>LOGIN</button>
            </Link>
        </div>
    </div>
)
}

export default Signup