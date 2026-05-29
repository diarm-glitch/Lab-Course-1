import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Customers from "./pages/Customers";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import BuySell from "./components/BuySell";
import Assistance from "./components/Assistance";
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import ServiceTypes from "./pages/ServiceTypes";
import Technicians from "./pages/Technicians";
import Appointments from "./pages/Appointments";
import Parts from "./pages/Parts";
import ServiceRecords from "./pages/ServiceRecords";
import ServiceParts from "./pages/ServiceParts";
import Invoices from "./pages/Invoices";
import ServiceReminders from "./pages/ServiceReminders";
import Roles from "./pages/Roles";
import UserRoles from "./pages/UserRoles";
import Users from "./pages/Users";
import UserClaims from "./pages/UserClaims";
import UserTokens from "./pages/UserTokens";
import MechanicApplication from "./pages/MechanicApplication";
import EmergencyPickup from "./pages/EmergencyPickup";
import ContactMessages from "./pages/ContactMessages";
import EmergencyPickups from "./pages/EmergencyPickups";
import MechanicApplications from "./pages/MechanicApplications";

function HomePage() {
  return (
    <>
    <header className="hero">
      <Navbar />

      <section className="hero-content">
        <h1>All your vehicle needs, in one place</h1>
        <p>Book services, find mechanics, or get help instantly</p>

        <div className="hero-buttons">
          <a href="#services" className="book-btn">Book a Service</a>
          <a href="#buysell" className="outline-btn">Buy or Sell Cars</a>
          <Link to="/emergency-pickup" className="outline-btn"> Emergency Pickup </Link>
        </div>
      </section>
    </header>

    <About />
    <Services />
    <BuySell />
    <Assistance />
    <Footer />
    </>
  );
}

function AdminLayout({ children }) {
  return (
    <div className="d-flex vh-100 overflow-hidden">
      <Sidebar />
      <div className="flex-grow-1 overflow-auto"
        style={{scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        >
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/mechanic-application" element={<MechanicApplication />} />

      <Route path="/emergency-pickup" element={<EmergencyPickup />}/>

      <Route 
      path="/dashboard" 
      element = {
        <ProtectedRoute>
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        </ProtectedRoute>
      } />

      <Route 
      path="/customers"
      element = {
        <ProtectedRoute>
          <AdminLayout>
            <Customers />
          </AdminLayout>
        </ProtectedRoute>
      }
      />

      <Route 
      path="/Vehicles"
      element = {
        <ProtectedRoute>
          <AdminLayout>
            <Vehicles />
          </AdminLayout>
        </ProtectedRoute>
      }
      />

      <Route
      path="/service-types"
      element={
        <ProtectedRoute>
          <AdminLayout>
            <ServiceTypes />
          </AdminLayout>
        </ProtectedRoute>
      }
      />

      <Route
      path="/technicians"
      element={
        <ProtectedRoute>
          <AdminLayout>
            <Technicians />
          </AdminLayout>
        </ProtectedRoute>
      }
      />

      <Route
      path="/appointments"
      element={
        <ProtectedRoute>
          <AdminLayout>
            <Appointments />
          </AdminLayout>
        </ProtectedRoute>
      }
      />

      <Route
      path="/parts"
      element={
        <ProtectedRoute>
          <AdminLayout>
            <Parts />
          </AdminLayout>
        </ProtectedRoute>
      }
      />

      <Route
      path="/service-records"
      element={
        <ProtectedRoute>
          <AdminLayout>
            <ServiceRecords />
          </AdminLayout>
        </ProtectedRoute>
      }
      />

      <Route 
      path="/service-parts"
      element={
        <ProtectedRoute>
          <AdminLayout>
            <ServiceParts />
          </AdminLayout>
        </ProtectedRoute>
      }
      />

      <Route
      path="/invoices"
      element={
        <ProtectedRoute>
          <AdminLayout>
            <Invoices />
          </AdminLayout>
        </ProtectedRoute>
      }
      />

      <Route 
      path="/service-reminders"
      element={
        <ProtectedRoute>
          <AdminLayout>
            <ServiceReminders />
          </AdminLayout>
        </ProtectedRoute>
      }
      />

      <Route
      path="/roles"
      element={
        <ProtectedRoute allowedRoles={["Admin"]}>
            <Roles />
        </ProtectedRoute>
      }
      />

      <Route
      path="/user-roles"
      element={
        <ProtectedRoute allowedRoles={["Admin"]}>
            <UserRoles />
        </ProtectedRoute>
      }
      />

      <Route 
      path="/users"
      element={
        <ProtectedRoute allowedRoles={["Admin"]}>
            <Users />
        </ProtectedRoute>
      }
      />

      <Route
      path="/user-claims"
      element={
      <ProtectedRoute allowedRoles={["Admin"]}>
          <UserClaims />
      </ProtectedRoute>
      }
      />

      <Route
      path="/user-tokens"
      element={
        <ProtectedRoute allowedRoles={["Admin"]}>
            <UserTokens />
        </ProtectedRoute>
      }
      />

      <Route
      path="/dashboard/contact-messages"
      element={
        <ProtectedRoute>
            <AdminLayout>
              <ContactMessages />
            </AdminLayout>
        </ProtectedRoute>
      }
      />

      <Route
      path="/dashboard/emergency-pickups"
      element={
        <ProtectedRoute>
          <AdminLayout>
            <EmergencyPickups />
          </AdminLayout>
        </ProtectedRoute>
      }
      />

      <Route
      path="/dashboard/mechanic-applications"
      element={
        <ProtectedRoute>
          <AdminLayout>
            <MechanicApplications />
          </AdminLayout>
        </ProtectedRoute>
      }
      />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
