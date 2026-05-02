function Navbar() {
  return (
    <nav className="navbar">
      <a href="#top" className="logo-link">
        <img
            className="logo"
            src="/cbgLogo.png"
            alt="CBG Logo"
        />
      </a>

      <div className="nav-links">
        <a href="#about">About Us</a>
        <a href="#">Apply to be a mechanic</a>
        <a href="#services">Our Services</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="nav-actions">
        <a href="#" className="signin">Sign in</a>
        <a href="#" className="get-started">Get Started</a>
      </div>
    </nav>
  );
}

export default Navbar;