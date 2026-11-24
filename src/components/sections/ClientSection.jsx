
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import clientData from "../../modules/public/data/clientData";
import "./ClientSection.css";

function ClientSection() {
  return (
    <section className="client-section">
      <div className="client-container">

        <div className="client-heading">
          <span className="section-eyebrow">OUR CLIENTS</span>
          <h2>Trusted Partnerships</h2>
          <p>
            Building strong relationships with public institutions
            and organisations through reliable infrastructure delivery.
          </p>
        </div>

        <div className="client-grid">
          {clientData.map((client) => (
            <div className="client-card" key={client.id}>
              <div className="client-logo-placeholder">
                <span>{client.logoText}</span>
              </div>

              <h3>{client.shortName}</h3>
              <p>{client.name}</p>
              <span className="client-category">{client.category}</span>
            </div>
          ))}
        </div>

        <div className="client-bottom-link">
          <Link to="/clientele">
            View All Clients <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ClientSection;
