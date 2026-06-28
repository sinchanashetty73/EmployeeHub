import {
  FaHome,
  FaUsers,
  FaBuilding,
  FaChartPie,
  FaFileAlt,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
const handleLogout = () => {

    localStorage.removeItem("user");

    toast.success("Logged Out Successfully");

    setTimeout(() => {

        navigate("/");

    }, 1000);

};
  return (

    <div className="sidebar">

      <div className="logo">

        <h2>EmployeeHub</h2>

      </div>

      <ul>

<li>
<a href="#dashboard">
<FaHome />
Dashboard
</a>
</li>

<li>
<a href="#employees">
<FaUsers />
Employees
</a>
</li>


<li>
<a href="#analytics">
<FaChartPie />
Analytics
</a>
</li>

<li>
<a href="#reports">
<FaFileAlt />
Reports
</a>
</li>



</ul>

<button
    className="logout-btn"
    onClick={handleLogout}
>
    Logout
</button>

     

    </div>

  );

};

export default Sidebar;