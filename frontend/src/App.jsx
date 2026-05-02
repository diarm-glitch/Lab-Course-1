import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import BuySell from "./components/BuySell";
import Assistance from "./components/Assistance";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <header className="hero">
  <Navbar />

  <section className="hero-content">
    <h1>All your vehicle needs, in one place</h1>
    <p>Book services, find mechanics, or get help instantly</p>

    <div className="hero-buttons">
      <a href="#" className="book-btn">Book a Service</a>
      <a href="#" className="outline-btn">Buy or Sell Cars</a>
      <a href="#" className="outline-btn">Emergency Pickup</a>
    </div>
  </section>
</header>

      <About />

      <Services />

      <BuySell />

      <Assistance />

      <Footer/>
    </>
  );
}

export default App;