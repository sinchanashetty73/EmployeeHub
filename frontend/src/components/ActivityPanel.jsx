import {
  FaUserPlus,
  FaUserEdit,
  FaTrash
} from "react-icons/fa";

const RecentActivity = ({ employees }) => {

  const recentEmployees = [...employees]
    .sort(
      (a, b) =>
        new Date(b.joinDate) -
        new Date(a.joinDate)
    )
    .slice(0, 5);

  return (

    <div className="card shadow border-0">

      <div className="card-body">

        <h4 className="mb-4">
          Recent Employees
        </h4>

        {

          recentEmployees.map(emp => (

            <div
              key={emp._id}
              className="d-flex justify-content-between align-items-center mb-3"
            >

              <div>

                <strong>{emp.name}</strong>

                <br />

                <small>{emp.department}</small>

              </div>

              <FaUserPlus
                className="text-success"
              />

            </div>

          ))

        }

      </div>

    </div>

  );

};

export default RecentActivity;