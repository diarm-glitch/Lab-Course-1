function Assistance() {
  return (
    <section className="assistance">
      <div className="assistance-container">
        
        <div className="assistance-text">
          <h2>Roadside Assistance</h2>
          <p>
            Stuck on the road? We’ve got you covered. Our team provides fast and
            reliable roadside assistance whenever you need it.
          </p>

          <ul>
            <li>24/7 Emergency Support</li>
            <li>Vehicle Towing</li>
            <li>Battery Jump Start</li>
            <li>Flat Tire Help</li>
          </ul>

          <a href="#" className="assist-btn">Get Help Now</a>
        </div>

        <div className="assistance-image">
          <img src="/assistance.jpg" alt="Roadside assistance" />
        </div>

      </div>
    </section>
  );
}

export default Assistance;