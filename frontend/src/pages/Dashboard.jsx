import { useEffect, useState } from "react";
import { deleteEmployee } from "../services/employeeAPI";

import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import SearchBar from "../components/SearchBar";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeForm from "../components/EmployeeForm";
import ConfirmDelete from "../components/ConfirmDelete";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";
import EmployeeChart from "../components/EmployeeChart";
import RecentActivity from "../components/RecentActivity";


import { getEmployees } from "../services/employeeAPI";

const Dashboard = () => {

    const [employees, setEmployees] = useState([]);
    const [department, setDepartment] = useState("");
const [sort, setSort] = useState("");

    const [search, setSearch] = useState("");
    const [showForm, setShowForm] = useState(false);
//   Edit
    const [selectedEmployee, setSelectedEmployee] = useState(null);
const [isEditing, setIsEditing] = useState(false);
// Delete 
const [showDelete, setShowDelete] = useState(false);
const [deleteEmployeeId, setDeleteEmployeeId] = useState(null);


// Edite functions
const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setIsEditing(true);
    setShowForm(true);
};

const confirmDelete = async () => {

    await deleteEmployee(deleteEmployeeId);

    loadEmployees();

    setShowDelete(false);

};

// Delete functions
const handleDeleteClick = (id) => {
    setDeleteEmployeeId(id);
    setShowDelete(true);
};

    // Fetch Employees
    const loadEmployees = async () => {

        try {

            const response = await getEmployees();

            setEmployees(response.data);

        }

        catch(error){

            console.log(error);

        }

    };

    useEffect(()=>{

        loadEmployees();

    },[]);

    return (

<>

<div className="container-fluid">

<div className="row">

<div className="col-md-2">

<Sidebar/>

</div>

<div className="col-md-10 offset-md-2">

<TopNavbar/>

<div className="container mt-4">
<div id="dashboard">
<DashboardCards employees={employees}/>
</div>


<div className="row mt-4 align-items-center">

    {/* Search Box */}
    <div className="col-md-4">

        <SearchBar
            search={search}
            setSearch={setSearch}
        />

    </div>

    {/* Department Filter */}
    <div className="col-md-3">

        <select
            className="form-select"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
        >
            <option value="">All Departments</option>
            <option>IT</option>
            <option>HR</option>
            <option>Finance</option>
            <option>Marketing</option>
            <option>Non IT</option>
        </select>

    </div>

    {/* Sort */}
    <div className="col-md-2">

        <select
            className="form-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
        >
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="salary">Salary</option>
            <option value="department">Department</option>
            <option value="date">Join Date</option>
        </select>

    </div>

    {/* Add Employee Button */}
    <div className="col-md-3 text-end">

        <button
            className="btn btn-primary"
            onClick={() => setShowForm(true)}
        >
            Add Employee
        </button>

    </div>

</div>
<div id="employees">
    <EmployeeTable
    employees={employees}
    search={search}
    department={department}
    sort={sort}
    handleEdit={handleEdit}
    handleDelete={handleDeleteClick}
/>

</div>


<div className="row mt-4">

    <div className="col-lg-8">
    <div id="analytics" className="mt-5">
     <EmployeeChart
            employees={employees}
        />
    </div>
        

    </div>

    <div className="col-lg-4">
        <div id="reports" className="mt-5">
       <RecentActivity
            employees={employees}
        />
        </div>
        
        

    </div>

</div>

<EmployeeForm
    show={showForm}
    handleClose={() => {
        setShowForm(false);
        setSelectedEmployee(null);
        setIsEditing(false);
    }}
    loadEmployees={loadEmployees}
    employee={selectedEmployee}
    isEditing={isEditing}
/>

<ConfirmDelete
    show={showDelete}
    handleClose={() => setShowDelete(false)}
    confirmDelete={confirmDelete}
/>

</div> {/* container */}

</div> {/* col-md-10 */}

</div> {/* row */}

</div> {/* container-fluid */}

</>

);
};

export default Dashboard;