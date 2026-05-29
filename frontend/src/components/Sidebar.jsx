import { Link } from "react-router-dom";

function Sidebar() {
  const role = localStorage.getItem("role");

  const handleLogout = () => {  
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="bg-dark text-white p-3" style={{ width: "250px", minHeight: "100vh", overflowY: "auto", flexShrink: 0,  background: "linear-gradient(180deg, #1E88E5, #42A5F5)", boxShadow: "4px 0 15px rgba(0,0,0,0.15)" }}>
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
        <li className="nav-item"><Link className="nav-link text-white" to="/dashboard/contact-messages">Contact Messages</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/dashboard/emergency-pickups">Emergency Pickups</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/dashboard/mechanic-applications">Mechanic Applications</Link></li>

        <hr />

        {role === "Admin" && (
  <>
    <hr />

    <li className="nav-item">
      <Link className="nav-link text-white" to="/users">Users</Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link text-white" to="/roles">Roles</Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link text-white" to="/user-roles">User Roles</Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link text-white" to="/user-claims">User Claims</Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link text-white" to="/user-tokens">User Tokens</Link>
    </li>
  </>
)}

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