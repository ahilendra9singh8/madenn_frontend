
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="main-header">
        <div className="header-container">

          <Link to="/" className="company-logo">
            MADENN
            <span>DEVELOPERS PRIVATE LIMITED</span>
          </Link>

          <div className="header-right">
            <span className="header-tagline">
              Building Infrastructure. Connecting Progress.
            </span>
          </div>

        </div>
      </header>

      <Navbar />
    </>
  );
}

export default Header;