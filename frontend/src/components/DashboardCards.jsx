import {
  FaUsers,
  FaBuilding,
  FaMoneyBillWave,
  FaTrophy,
  FaArrowDown,
  FaUserPlus,
} from "react-icons/fa";

const DashboardCards = ({ employees }) => {

  const totalEmployees = employees.length;

  const departments = [
    ...new Set(employees.map((emp) => emp.department))
  ].length;

  const averageSalary =
    employees.length > 0
      ? Math.round(
          employees.reduce(
            (sum, emp) => sum + Number(emp.salary),
            0
          ) / employees.length
        )
      : 0;

  const highestSalary =
    employees.length > 0
      ? Math.max(...employees.map(emp => Number(emp.salary)))
      : 0;

  const lowestSalary =
    employees.length > 0
      ? Math.min(...employees.map(emp => Number(emp.salary)))
      : 0;

  const newEmployees =
    employees.filter(emp => {

      const join = new Date(emp.joinDate);

      const today = new Date();

      return (
        join.getMonth() === today.getMonth() &&
        join.getFullYear() === today.getFullYear()
      );

    }).length;

  const cards = [

    {
      title: "Total Employees",
      value: totalEmployees,
      icon: <FaUsers size={35} />,
      color: "primary",
    },

    {
      title: "Departments",
      value: departments,
      icon: <FaBuilding size={35} />,
      color: "success",
    },

    {
      title: "Average Salary",
      value: `₹ ${averageSalary.toLocaleString()}`,
      icon: <FaMoneyBillWave size={35} />,
      color: "warning",
    },

    {
      title: "Highest Salary",
      value: `₹ ${highestSalary.toLocaleString()}`,
      icon: <FaTrophy size={35} />,
      color: "danger",
    },

    {
      title: "Lowest Salary",
      value: `₹ ${lowestSalary.toLocaleString()}`,
      icon: <FaArrowDown size={35} />,
      color: "secondary",
    },

    {
      title: "New This Month",
      value: newEmployees,
      icon: <FaUserPlus size={35} />,
      color: "info",
    },

  ];

  return (

    <div className="row g-4">

      {cards.map((card, index) => (

        <div
          className="col-lg-4 col-md-6"
          key={index}
        >

          <div
            className={`card border-0 shadow-lg h-100 bg-${card.color} text-white`}
            style={{
              borderRadius: "18px",
              transition: ".3s",
              cursor: "pointer"
            }}
          >

            <div className="card-body">

              <div className="d-flex justify-content-between align-items-center">

                <div>

                  <h6>{card.title}</h6>

                  <h2 className="fw-bold">

                    {card.value}

                  </h2>

                </div>

                <div>

                  {card.icon}

                </div>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  );

};

export default DashboardCards;