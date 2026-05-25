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

function HomePage() {
  retrun (
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
    <Service />
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

    </Routes>
    </BrowserRouter>
  );
}

export default App;