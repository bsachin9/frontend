import React,{useState, useEffect} from "react"
import axios from "axios"
import { Link , useNavigate} from "react-router-dom"


function HomePage() {
    const [users,setUsers] = useState([])
    const navigate = useNavigate()
    axios.defaults.withCredentials=true

    useEffect (() => {
        axios.get('http://localhost:3000/home')
        .then (result => {console.log(result)
            if(result.data !== "Success")
            {
                navigate('/login')
            }
        })
        .catch (err =>console.log(err))
    },[])

    useEffect (()=> {
        axios.get('http://localhost:3000/')
        .then(users => setUsers(users.data))
        .catch(err => console.log(err))
    },[])

    return (
        <div className="w-100 vh-100 d-flex justify-content-center">
            <div className="w-100">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th className="bg-danger-subtle">#Sr No.</th>
                            <th className="bg-danger-subtle">Name</th>
                            <th className="bg-danger-subtle">Date Created</th>
                            <th className="bg-danger-subtle">Role</th>
                            <th className="bg-danger-subtle">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sachin B.</td>
                            <td>10/07/2023</td>
                            <td>CEO</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Manasi Naik</td>
                            <td>09/02/2022</td>
                            <td>Managing Director</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Dinesh singh</td>
                            <td>21/11/2020</td>
                            <td>Staff</td>
                            <td>De-active</td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Geeta Pujari</td>
                            <td>26/02/2022</td>
                            <td>H R</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Geeta Pujari</td>
                            <td>26/02/2022</td>
                            <td>H R</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td>Aasha Gupta</td>
                            <td>06/04/2021</td>
                            <td>Assisstant</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>Teena Sen</td>
                            <td>13/06/2021</td>
                            <td>Sr. Engineer</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td>7</td>
                            <td>Lalit Kulkarni</td>
                            <td>09/09/2010</td>
                            <td>Technical Head</td>
                            <td>Active</td>
                        </tr>

                    </tbody>
                </table>

                <Link to='/login'>
                <button type='submit' className='btn btn-danger w-25 rounded-1'>Logout</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;