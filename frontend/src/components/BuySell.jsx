function BuySell() {
  return (
    <section id="buy" className="buy-section">
      <h2>
        BROWSE, BUY, SELL
        <br />
        ALL IN ONE PLACE
      </h2>

      <div className="car-search-box">
        <div className="car-tabs">
          <button className="car-tab active">Find a car</button>
          <button className="car-tab">Sell my car</button>
          <button className="car-tab">Read reviews</button>
        </div>

        <div className="search-area">
          <input type="text" placeholder="Search by brand..." />
          <button className="search-btn">🔍</button>
        </div>
      </div>

      <div className="car-options">
        <a href="#" className="car-option"><span>New</span></a>
        <a href="#" className="car-option"><span>Used</span></a>
        <a href="#" className="car-option"><span>EVs</span></a>
        <a href="#" className="car-option"><span>SUVs</span></a>
        <a href="#" className="car-option"><span>Vans</span></a>
        <a href="#" className="car-option"><span>Hybrids</span></a>
      </div>
    </section>
  );
}

export default BuySell;