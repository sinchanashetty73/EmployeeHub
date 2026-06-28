import { FaBell, FaUserCircle } from "react-icons/fa";

import "../css/navbar.css";

const TopNavbar = () => {

    return(

<div className="top-navbar">

<div>

<h3>Dashboard</h3>

<p>Welcome Back 👋</p>

</div>

<div className="top-right">

<FaBell size={22}/>

<FaUserCircle size={35}/>

</div>

</div>

    );

};

export default TopNavbar;