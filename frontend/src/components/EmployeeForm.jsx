import { useState, useEffect } from "react";
import { addEmployee, updateEmployee } from "../services/employeeAPI";
import { toast } from "react-toastify";

const EmployeeForm = ({
    show,
    handleClose,
    loadEmployees,
    employee: selectedEmployee,
    isEditing
}) => {

    const [employee, setEmployee] = useState({
        name: "",
        department: "",
        role: "",
        salary: "",
        joinDate: ""
    });

    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });

    };

   const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        if (isEditing) {

            await updateEmployee(selectedEmployee._id, employee);

            toast.success("Employee Updated Successfully 🎉");

        } else {

            await addEmployee(employee);

            toast.success("Employee Added Successfully 🎉");

        }

        loadEmployees();

        handleClose();

        setEmployee({
            name: "",
            department: "",
            role: "",
            salary: "",
            joinDate: ""
        });

    } catch (error) {

        toast.error("Something went wrong!");

        console.error(error);

    }

};
   const confirmDelete = async () => {

    try {

        await deleteEmployee(deleteEmployeeId);

        toast.success("Employee Deleted Successfully 🗑️");

        loadEmployees();

        setShowDelete(false);

    } catch (error) {

        toast.error("Failed to delete employee!");

    }

};

    useEffect(() => {

    if (selectedEmployee) {

        setEmployee({
            name: selectedEmployee.name || "",
            department: selectedEmployee.department || "",
            role: selectedEmployee.role || "",
            salary: selectedEmployee.salary || "",
            joinDate: selectedEmployee.joinDate || ""
        });

    }

}, [selectedEmployee]);

    if(!show) return null;

    return (

<div className="modal d-block" style={{background:"rgba(0,0,0,0.5)"}}>

<div className="modal-dialog">

<div className="modal-content">

<div className="modal-header">
<h5>
    {isEditing ? "Update Employee" : "Add Employee"}
</h5>

<button
className="btn-close"
onClick={handleClose}
/>

</div>

<div className="modal-body">

<form onSubmit={handleSubmit}>

<input
className="form-control mb-3"
placeholder="Employee Name"
name="name"
value={employee.name}
onChange={handleChange}
/>

<input
className="form-control mb-3"
placeholder="Department"
name="department"
value={employee.department}
onChange={handleChange}
/>

<input
className="form-control mb-3"
placeholder="Role"
name="role"
value={employee.role}
onChange={handleChange}
/>

<input
type="number"
className="form-control mb-3"
placeholder="Salary"
name="salary"
value={employee.salary}
onChange={handleChange}
/>

<input
type="date"
className="form-control mb-3"
name="joinDate"
value={employee.joinDate}
onChange={handleChange}
/>

<button
    type="submit"
    className="btn btn-success w-100"
>
    {isEditing ? "Update Employee" : "Save Employee"}
</button>

</form>

</div>

</div>

</div>

</div>

    );

};

export default EmployeeForm;