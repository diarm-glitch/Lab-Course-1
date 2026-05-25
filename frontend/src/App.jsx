import { BrowserRouter, Routes, Route} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Customers from "./pages/Customers";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import BuySell from "./components/BuySell";
import Assistance from "./components/Assistance";
import Footer from "./components/Footer"

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

function HomePage() {
  return (
    <>
    <header className="hero">
      <Navbar />

      <section className="heo-content">
        <h1>All your vehicle needs, in one place</h1>
        <p>Book service, find mechanics, or get help instantly</p>

        <div className="hero-buttons">
          <a href="#" className="book-btn">Book a service</a>
          <a href="#" className="outline-btn">Buy or sell</a>
          <a href="#" className="outline-btn">Emergency Pickup</a>
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

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route 
      path="/dashboard" 
      element = {
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />

      <Route 
      path="/customers"
      element = {
        <ProtectedRoute>
          <Customers />
        </ProtectedRoute>
      }
      />

      <Route 
      path="/Vehicles"
      element = {
        <ProtectedRoute>
          <Vehicles />
        </ProtectedRoute>
      }
      />

      <Route
      path="/service-types"
      element={
        <ProtectedRoute>
          <ServiceTypes />
        </ProtectedRoute>
      }
      />

      <Route
      path="/technicians"
      element={
        <ProtectedRoute>
          <Technicians />
        </ProtectedRoute>
      }
      />

      <Route
      path="/appointments"
      element={
        <ProtectedRoute>
          <Appointments />
        </ProtectedRoute>
      }
      />

      <Route
      path="/parts"
      element={
        <ProtectedRoute>
          <Parts />
        </ProtectedRoute>
      }
      />

      <Route
      path="/service-records"
      element={
        <ProtectedRoute>
          <ServiceRecords />
        </ProtectedRoute>
      }
      />

      <Route 
      path="/service-parts"
      element={
        <ProtectedRoute>
          <ServiceParts />
        </ProtectedRoute>
      }
      />

      <Route
      path="/invoices"
      element={
        <ProtectedRoute>
          <Invoices />
        </ProtectedRoute>
      }
      />

      <Route 
      path="/service-reminders"
      element={
        <ProtectedRoute>
          <ServiceReminders />
        </ProtectedRoute>
      }
      />

      <Route
      path="/roles"
      element={
        <ProtectedRoute>
          <Roles />
        </ProtectedRoute>
      }
      />

      <Route
      path="/user-roles"
      element={
        <ProtectedRoute>
          <UserRoles />
        </ProtectedRoute>
      }
      />

      <Route 
      path="/users"
      element={
        <ProtectedRoute>
          <Users />
        </ProtectedRoute>
      }
      />

      <Route
      path="/user-claims"
      element={
      <ProtectedRoute>
        <UserClaims />
      </ProtectedRoute>
      }
      />

      <Route
      path="/user-tokens"
      element={
        <ProtectedRoute>
          <UserTokens />
        </ProtectedRoute>
      }
      />

    </Routes>
    </BrowserRouter>
  );
}

export default App;