import { useEffect, useState } from "react";
import API from "../api/api.js";

function Dashboard() {
  const [todayAppointments, setTodayAppointments] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [partsStock, setPartsStock] = useState([]);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalVehicles, setTotalVehicles] = useState(0);

  const getDashboardData = async () => {
    try {
      const appointmentsRes = await API.get("/dashboard/today-appointments");
      const revenueRes = await API.get("/dashboard/revenue");
      const partsRes = await API.get("/dashboard/parts-stock");
      const customersRes = await API.get("/dashboard/total-customers");
      const vehiclesRes = await API.get("/dashboard/total-vehicles");

      setTodayAppointments(appointmentsRes.data);
      setRevenue(revenueRes.data.total_revenue || 0);
      setPartsStock(partsRes.data);
      setTotalCustomers(customersRes.data.total_customers);
      setTotalVehicles(vehiclesRes.data.total_vehicles);
    } catch (error) {
      console.log(error);
      alert("Failed to load dashboard data");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>

      <button className="btn btn-danger mb-4" onClick={handleLogout}>
        Logout
      </button>

      <div className="row mb-4">
        <div className="col">
          <div className="card p-3">
            <h5>Today's Appointments</h5>
            <h2>{todayAppointments.length}</h2>
          </div>
        </div>

        <div className="col">
          <div className="card p-3">
            <h5>Total Revenue</h5>
            <h2>{revenue} €</h2>
          </div>
        </div>

        <div className="col">
          <div className="card p-3">
            <h5>Total Customers</h5>
            <h2>{totalCustomers}</h2>
          </div>
        </div>

        <div className="col">
          <div className="card p-3">
            <h5>Total Vehicles</h5>
            <h2>{totalVehicles}</h2>
          </div>
        </div>
      </div>

      <h3>Parts Stock</h3>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Part</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          {partsStock.map((part) => (
            <tr key={part.id}>
              <td>{part.id}</td>
              <td>{part.emertimi}</td>
              <td>{part.sasia < 5 ? (
                <span className="text-danger fw-bold">
                    Low Stock ({part.sasia})
                </span>
              ) : (
                part.sasia
              )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;