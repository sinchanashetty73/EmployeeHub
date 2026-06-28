import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authAPI";
import { toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";

const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try{

            const response = await loginUser(user);

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            toast.success("Login Successful");

            setTimeout(()=>{
                navigate("/dashboard");
            },1200);

        }

        catch(error){

            toast.error(
                error.response?.data?.message ||
                "Invalid Credentials"
            );

        }

    };

    return(

<div className="container vh-100 d-flex justify-content-center align-items-center">

<div className="card shadow-lg p-5" style={{width:"430px"}}>

<div className="text-center mb-4">

<FaUserCircle size={70} className="text-primary"/>

<h2 className="mt-3">EmployeeHub</h2>

<p className="text-muted">
HR Management System
</p>

</div>

<form onSubmit={handleSubmit}>

<input

type="email"

className="form-control mb-3"

placeholder="Email"

name="email"

value={user.email}

onChange={handleChange}

required

/>

<input

type="password"

className="form-control mb-3"

placeholder="Password"

name="password"

value={user.password}

onChange={handleChange}

required

/>

<button className="btn btn-primary w-100">

Login

</button>

</form>

<div className="text-center mt-3">

Don't have an account?

<Link to="/signup">

 Sign Up

</Link>

</div>

</div>

</div>

);

};

export default Login;