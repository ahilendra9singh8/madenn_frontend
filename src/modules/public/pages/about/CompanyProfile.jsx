import {
  Award,
  Lightbulb,
  ShieldCheck,
  Handshake,
} from "lucide-react";

import { companyProfileData } from "../../data/companyData";
import "./CompanyProfile.css";

const iconMap = {
  award: Award,
  lightbulb: Lightbulb,
  "shield-check": ShieldCheck,
  handshake: Handshake,
};

function CompanyProfile() {
  const { banner, introduction, vision, mission, values } =
    companyProfileData;

  return (
    <div className="company-profile-page">

      {/* Page Banner */}
      <section
        className="about-page-banner"
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <div className="about-page-banner-overlay">
          <div className="container">
            <span>ABOUT MADENN DEVELOPERS</span>
            <h1>{banner.title}</h1>
            <p>{banner.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="company-intro section-padding">
        <div className="container company-intro-grid">

          <div className="company-intro-image">
            <img
              src={introduction.image}
              alt="Infrastructure development"
            />
          </div>

          <div className="company-intro-content">
            <span className="section-eyebrow">
              {introduction.eyebrow}
            </span>

            <h2>{introduction.title}</h2>

            <p>{introduction.description}</p>

            <p>{introduction.additionalDescription}</p>
          </div>

        </div>
      </section>

      {/* Vision and Mission */}
      <section className="vision-mission-section section-padding">
        <div className="container vision-mission-grid">

          <div className="vision-card">
            <span>01</span>
            <h3>{vision.title}</h3>
            <p>{vision.description}</p>
          </div>

          <div className="mission-card">
            <span>02</span>
            <h3>{mission.title}</h3>
            <p>{mission.description}</p>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="company-values section-padding">
        <div className="container">

          <div className="section-heading">
            <span className="section-eyebrow">WHAT DRIVES US</span>
            <h2>Our Core Values</h2>
            <p>
              The principles that guide our work and relationships.
            </p>
          </div>

          <div className="company-values-grid">
            {values.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <div className="company-value-card" key={item.id}>
                  <div className="value-icon">
                    {Icon && <Icon size={30} />}
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}

export default CompanyProfile;