function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        <a href="#" className="service-card">
          <img src="/repair.png" alt="Repairs icon" className="service-icon" />
          <h3>Repairs</h3>
        </a>

        <a href="#" className="service-card">
          <img src="/diagnos.png" alt="Diagnostics icon" className="service-icon" />
          <h3>Diagnostics</h3>
        </a>

        <a href="#" className="service-card">
          <img src="/servis.png" alt="Services icon" className="service-icon" />
          <h3>Servicing</h3>
        </a>

        <a href="#" className="service-card">
          <img src="/tyres.png" alt="Tyres icon" className="service-icon" />
          <h3>Tyres</h3>
        </a>

        <a href="#" className="service-card">
          <img src="/tuning.png" alt="Tuning icon" className="service-icon tuning-icon" />
          <h3>Tuning</h3>
        </a>

        <a href="#" className="service-card">
          <img src="/inspection.png" alt="Inspection icon" className="service-icon" />
          <h3>Pre-Purchase Inspection</h3>
        </a>
      </div>

      <a href="#" className="services-btn">Find out more →</a>
    </section>
  );
}

export default Services;