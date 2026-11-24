
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import businessData from "../../modules/public/data/businessData";
import "./BusinessSection.css";

function BusinessSection() {
  return (
    <section className="business-section">
      <div className="business-container">

        <div className="business-heading">
          <div>
            <span className="section-eyebrow">WHAT WE DO</span>
            <h2>Our Business Sectors</h2>
            <p>
              Delivering integrated infrastructure solutions across
              multiple sectors for sustainable development.
            </p>
          </div>

          <Link to="/businesses" className="business-view-all">
            View All Businesses <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="business-grid">
          {businessData.map((business) => (
            <Link
              to={business.link}
              className="business-card"
              key={business.id}
            >
              <div className="business-card-image">
                <img
                  src={business.image}
                  alt={business.title}
                  loading="lazy"
                />
                <div className="business-card-overlay"></div>
                <span className="business-card-number">
                  {String(business.id).padStart(2, "0")}
                </span>
              </div>

              <div className="business-card-content">
                <div>
                  <h3>{business.title}</h3>
                  <p>{business.description}</p>
                </div>

                <span className="business-card-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BusinessSection;