# EmployeeHub - Employee Management System

EmployeeHub is a Full Stack Employee Management System developed using **React.js**, **Flask**, and **MongoDB**. The application helps organizations manage employee information efficiently by providing complete CRUD (Create, Read, Update, Delete) functionality along with employee analytics, authentication, search, filtering, sorting, and dashboard statistics.

The project follows a client-server architecture where the React frontend communicates with the Flask REST API, and employee data is stored in MongoDB.

---

## Features

### Authentication
- User Signup
- User Login
- Logout functionality
- Protected Dashboard

### Employee Management
- Add Employee
- View Employees
- Update Employee Details
- Delete Employee
- Search Employee
- Filter Employees by Department
- Sort Employees
- Employee Statistics

### Dashboard
- Total Employees
- Number of Departments
- Average Salary
- Highest Salary
- Lowest Salary
- New Employees Count

### Analytics
- Employee Department Pie Chart
- Recent Employee Activity

### UI Features
- Responsive Dashboard
- Modern Sidebar
- Top Navigation Bar
- Bootstrap UI
- React Icons
- Toast Notifications
- Confirmation Dialog before Delete

---

# Technology Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Bootstrap 5
- React Icons
- React Toastify
- Chart.js
- React ChartJS 2
- CSS

## Backend

- Python
- Flask
- Flask-CORS
- PyMongo
- python-dotenv

## Database

- MongoDB

---

# Project Structure
EmployeeHub/
│
├── backend/
│ ├── app.py
│ ├── config.py
│ ├── database/
│ │ └── db.py
│ ├── routes/
│ │ ├── employee_routes.py
│ │ └── auth_routes.py
│ ├── models/
│ ├── utils/
│ ├── requirements.txt
│ └── .env
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── css/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── package.json
│ └── vite.config.js
│
└── README.md


---

# Installation Guide

## Clone Repository

```bash
git clone https://github.com/yourusername/EmployeeHub.git

cd EmployeeHub
