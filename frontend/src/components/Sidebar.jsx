import { Link } from "react-router-dom";

function Sidebar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="bg-dark text-white p-3" style={{ width: "250px", minHeight: "100vh", overflowY: "auto", flexShrink: 0, }}>
      <h4 className="mb-4">Vehicle Service</h4>

      <ul className="nav flex-column">
        <li className="nav-item"><Link className="nav-link text-white" to="/dashboard">Dashboard</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/customers">Customers</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/vehicles">Vehicles</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/service-types">Service Types</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/technicians">Technicians</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/appointments">Appointments</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/service-records">Service Records</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/parts">Parts</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/service-parts">Service Parts</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/invoices">Invoices</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/service-reminders">Service Reminders</Link></li>

        <hr />

        <li className="nav-item"><Link className="nav-link text-white" to="/users">Users</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/roles">Roles</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/user-roles">User Roles</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/user-claims">User Claims</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/user-tokens">User Tokens</Link></li>

        <li className="nav-item mt-4">
          <button className="btn btn-danger w-100" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;