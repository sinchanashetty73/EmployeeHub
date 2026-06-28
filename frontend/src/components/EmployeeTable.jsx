import { FaEdit, FaTrash, FaUserCircle } from "react-icons/fa";

const EmployeeTable = ({
  employees,
  search,
  department,
  sort,
  handleEdit,
  handleDelete,
}) => {

  // Filter Employees
  let filteredEmployees = employees.filter((employee) => {

    const text = search.toLowerCase();

    const matchesSearch =
      (employee.name || "").toLowerCase().includes(text) ||
      (employee.department || "").toLowerCase().includes(text) ||
      (employee.role || "").toLowerCase().includes(text) ||
      String(employee.salary || "").includes(text) ||
      (employee.joinDate || "").toLowerCase().includes(text);

    const matchesDepartment =
      department === "" ||
      employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  // Sorting
  switch (sort) {
    case "name":
      filteredEmployees.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;

    case "salary":
      filteredEmployees.sort(
        (a, b) => b.salary - a.salary
      );
      break;

    case "department":
      filteredEmployees.sort((a, b) =>
        a.department.localeCompare(b.department)
      );
      break;

    case "date":
      filteredEmployees.sort(
        (a, b) =>
          new Date(b.joinDate) -
          new Date(a.joinDate)
      );
      break;

    default:
      break;
  }

  return (
    <div className="card shadow-lg border-0 mt-4">

      <div className="card-header bg-primary text-white">

        <h4 className="mb-0">
          Employee Management
        </h4>

      </div>

      <div className="card-body">

        <table className="table table-hover align-middle">

          <thead className="table-dark">

            <tr>

              <th>Employee</th>

              <th>Department</th>

              <th>Role</th>

              <th>Salary</th>

              <th>Join Date</th>

              <th className="text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredEmployees.length === 0 ? (

              <tr>

                <td
                  colSpan="6"
                  className="text-center text-muted py-5"
                >

                  No Employees Found

                </td>

              </tr>

            ) : (

              filteredEmployees.map((employee) => (

                <tr key={employee._id}>

                  <td>

                    <div className="d-flex align-items-center">

                      <FaUserCircle
                        size={35}
                        className="text-primary me-3"
                      />

                      <div>

                        <strong>

                          {employee.name}

                        </strong>

                        <br />

                        <small className="text-muted">

                          {employee.role}

                        </small>

                      </div>

                    </div>

                  </td>

                  <td>

                    <span className="badge bg-info">

                      {employee.department}

                    </span>

                  </td>

                  <td>

                    {employee.role}

                  </td>

                  <td>

                    <span className="text-success fw-bold">

                      ₹ {Number(employee.salary).toLocaleString()}

                    </span>

                  </td>

                  <td>

                    {employee.joinDate}

                  </td>

                  <td className="text-center">

                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() =>
                        handleEdit(employee)
                      }
                    >

                      <FaEdit />

                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        handleDelete(employee._id)
                      }
                    >

                      <FaTrash />

                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default EmployeeTable;