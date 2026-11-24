
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>MADENN DEVELOPERS</h2>
          <p>PRIVATE LIMITED</p>
          <span>
            Building Infrastructure. Connecting Progress.
          </span>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about/company-profile">About Us</Link>
          <Link to="/businesses">Our Businesses</Link>
          <Link to="/projects/completed">Projects</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Information</h3>
          <p>Email: info@madenndevelopers.com</p>
          <p>Phone: +91 9876543210</p>
          <p>India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Madenn Developers Private Limited.
        All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;