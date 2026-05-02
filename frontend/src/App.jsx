import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <>
      <header className="hero">
        <Navbar />
        <div className="hero-content">
          <h1>Customs Bay Garage</h1>
          <p>
            Reliable car service, buying & selling, and roadside assistance — all in one place.
          </p>

          <div className="hero-buttons">
            <a href="#" className="primary-btn">Get Started</a>
            <a href="#" className="secondary-btn">Learn More</a>
          </div>
        </div>
      </header>

      <About />

      <Services />
    </>
  );
}

export default App;