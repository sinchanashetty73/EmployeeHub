import {
  FaBell,
  FaCog,
  FaSearch,
  FaUserCircle,
  FaEnvelope,
} from "react-icons/fa";



const TopNavbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="top-navbar">

      <div className="left-side">

        <h3>Dashboard</h3>

        <p>
          Welcome Back,
          <span> {user?.name || "Admin"} 👋</span>
        </p>

      </div>

      <div className="middle">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search..."
          />

        </div>

      </div>

      <div className="right-side">

        <div className="icon-box">

          <FaBell />

          <span className="badge">3</span>

        </div>

        <div className="icon-box">

          <FaEnvelope />

          <span className="badge">5</span>

        </div>

        <div className="icon-box">

          <FaCog />

        </div>

        <div className="profile">

          <FaUserCircle />

          <span>{user?.name || "Admin"}</span>

        </div>

      </div>

    </nav>
  );
};

export default TopNavbar;