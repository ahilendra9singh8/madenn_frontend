
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import navigationData from "../../modules/public/data/navigationData";
import "./Navbar.css";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeMenu = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="main-navbar">
      <div className="navbar-container">

        <button
          className="mobile-menu-button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <div className={`navbar-links ${mobileOpen ? "mobile-open" : ""}`}>
          {navigationData.map((item) => (
            <div
              className={`nav-item ${item.children ? "has-dropdown" : ""}`}
              key={item.title}
              onMouseEnter={() => !mobileOpen && setActiveDropdown(item.title)}
              onMouseLeave={() => !mobileOpen && setActiveDropdown(null)}
            >
              <div className="nav-link-wrapper">
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  {item.title}
                </NavLink>

                {item.children && (
                  <button
                    className="dropdown-toggle"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.title ? null : item.title
                      )
                    }
                    aria-label={`Toggle ${item.title} submenu`}
                  >
                    <ChevronDown size={15} />
                  </button>
                )}
              </div>

              {item.children && (
                <div
                  className={`dropdown-menu ${
                    activeDropdown === item.title ? "dropdown-visible" : ""
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      to={child.path}
                      key={child.title}
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;