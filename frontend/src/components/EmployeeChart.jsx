import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#0d6efd",
  "#198754",
  "#ffc107",
  "#dc3545",
  "#6f42c1",
  "#20c997",
];

const EmployeeChart = ({ employees }) => {

  const departmentData = [];

  const departments = [...new Set(employees.map(emp => emp.department))];

  departments.forEach((dept) => {

    departmentData.push({
      name: dept,
      value: employees.filter(emp => emp.department === dept).length,
    });

  });

  return (

    <div className="card shadow border-0 mt-4">

      <div className="card-body">

        <h4 className="mb-4">

          Employees by Department

        </h4>

        <ResponsiveContainer width="100%" height={350}>

          <PieChart>

            <Pie
              data={departmentData}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
            >

              {departmentData.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

};

export default EmployeeChart;