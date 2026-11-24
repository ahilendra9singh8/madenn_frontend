
import {
  Building2,
  Download,
  Route,
  Zap,
  Droplets,
  Waves,
  CloudRain,
  Cpu,
  ArrowRight,
  Mail,
  Phone,
  FileText,
} from "lucide-react";

import brochureData from "../../data/brochureData";
import "./CorporateBrochure.css";

const iconMap = {
  Route,
  Zap,
  Droplets,
  Waves,
  CloudRain,
  Cpu,
};

function CorporateBrochure() {
  return (
    <div className="brochure-page">

      <section className="brochure-hero">
        <div className="brochure-hero-overlay">
          <div className="brochure-container">
            <span className="brochure-eyebrow">
              {brochureData.companyName}
            </span>

            <h1>Our Corporate Brochure</h1>

            <p>{brochureData.tagline}</p>

            <a href="#brochure-overview" className="brochure-primary-btn">
              Explore Company <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="brochure-overview" id="brochure-overview">
        <div className="brochure-container brochure-overview-grid">
          <div>
            <span className="brochure-section-label">WHO WE ARE</span>
            <h2>Building Infrastructure for a Better Tomorrow</h2>
            <p>{brochureData.description}</p>

            <p>
              We work across multiple infrastructure sectors with a focus
              on quality, safety, engineering and timely execution.
            </p>
          </div>

          <div className="brochure-overview-card">
            <Building2 size={48} />
            <h3>{brochureData.companyName}</h3>
            <p>{brochureData.tagline}</p>
          </div>
        </div>
      </section>

      <section className="brochure-statistics">
        <div className="brochure-container brochure-stat-grid">
          {brochureData.highlights.map((item) => (
            <div className="brochure-stat-item" key={item.id}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="brochure-sectors">
        <div className="brochure-container">
          <div className="brochure-heading">
            <span className="brochure-section-label">OUR EXPERTISE</span>
            <h2>Our Business Sectors</h2>
            <p>
              Infrastructure solutions across multiple sectors.
            </p>
          </div>

          <div className="brochure-sector-grid">
            {brochureData.sectors.map((sector) => {
              const SectorIcon = iconMap[sector.icon] || Building2;

              return (
                <div className="brochure-sector-card" key={sector.id}>
                  <div className="brochure-sector-icon">
                    <SectorIcon size={30} />
                  </div>
                  <h3>{sector.title}</h3>
                  <p>{sector.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="brochure-download">
        <div className="brochure-container brochure-download-content">
          <div className="brochure-download-icon">
            <FileText size={42} />
          </div>

          <div>
            <span className="brochure-section-label">COMPANY PROFILE</span>
            <h2>Download Our Corporate Brochure</h2>
            <p>
              Explore our company profile, business sectors and
              infrastructure capabilities.
            </p>
          </div>

          <a
            href={brochureData.brochureFile}
            className="brochure-download-btn"
            download
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>
      </section>

      <section className="brochure-contact">
        <div className="brochure-container">
          <h2>Let's Build Progress Together</h2>
          <p>Connect with our team for business and project enquiries.</p>

          <div className="brochure-contact-links">
            <a href={`mailto:${brochureData.contact.email}`}>
              <Mail size={18} /> {brochureData.contact.email}
            </a>

            <a href={`tel:${brochureData.contact.phone}`}>
              <Phone size={18} /> {brochureData.contact.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default CorporateBrochure;
