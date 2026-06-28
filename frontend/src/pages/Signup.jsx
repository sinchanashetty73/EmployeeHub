import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../services/authAPI";
import { toast } from "react-toastify";
import { FaUserPlus } from "react-icons/fa";

const Signup = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({

        name:"",
        email:"",
        password:""

    });

    const handleChange=(e)=>{

        setUser({

            ...user,

            [e.target.name]:e.target.value

        });

    };

    const handleSubmit=async(e)=>{

        e.preventDefault();

        try{

            await signupUser(user);

            toast.success("Account Created Successfully");

            setTimeout(()=>{

                navigate("/");

            },1200);

        }

        catch(error){

            toast.error(

                error.response?.data?.message ||

                "Signup Failed"

            );

        }

    };

    return(

<div className="container vh-100 d-flex justify-content-center align-items-center">

<div className="card shadow-lg p-5" style={{width:"430px"}}>

<div className="text-center mb-4">

<FaUserPlus size={70} className="text-success"/>

<h2 className="mt-3">

Create Account

</h2>

</div>

<form onSubmit={handleSubmit}>

<input

className="form-control mb-3"

placeholder="Full Name"

name="name"

value={user.name}

onChange={handleChange}

required

/>

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

<button className="btn btn-success w-100">

Create Account

</button>

</form>

<div className="text-center mt-3">

Already have an account?

<Link to="/">

 Login

</Link>

</div>

</div>

</div>

);

};

export default Signup;