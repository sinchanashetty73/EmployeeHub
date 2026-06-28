import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:5000"
});

// Get Employees
export const getEmployees = () => API.get("/employees");

// Add Employee
export const addEmployee = (employee) =>
    API.post("/employees", employee);

// Update Employee
export const updateEmployee = (id, employee) =>
    API.put(`/employees/${id}`, employee);

// Delete Employee
export const deleteEmployee = (id) =>
    API.delete(`/employees/${id}`);