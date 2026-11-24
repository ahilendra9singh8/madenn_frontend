import {
  Building2,
  Settings,
  Lightbulb,
  Leaf,
  Award,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

import { achievementsData } from "../../data/companyData";
import "./Achievements.css";

const iconMap = {
  "building-2": Building2,
  settings: Settings,
  lightbulb: Lightbulb,
  leaf: Leaf,
};

const certificationIcons = [
  Award,
  ShieldCheck,
  FileCheck,
];

function Achievements() {
  const {
    banner,
    introduction,
    highlights,
    certifications,
  } = achievementsData;

  return (
    <div className="achievements-page">

      {/* Banner */}
      <section
        className="about-page-banner"
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <div className="about-page-banner-overlay">
          <div className="container">
            <span>OUR PERFORMANCE</span>
            <h1>{banner.title}</h1>
            <p>{banner.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="achievement-intro section-padding">
        <div className="container">
          <span className="section-eyebrow">
            {introduction.eyebrow}
          </span>

          <h2>{introduction.title}</h2>

          <p>{introduction.description}</p>
        </div>
      </section>

      {/* Achievement Highlights */}
      <section className="achievement-highlights section-padding">
        <div className="container">

          <div className="section-heading">
            <span className="section-eyebrow">
              OUR STRENGTHS
            </span>
            <h2>Key Highlights</h2>
            <p>
              The capabilities and principles that guide our work.
            </p>
          </div>

          <div className="achievement-grid">
            {highlights.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <div className="achievement-card" key={item.id}>
                  <div className="achievement-card-top">
                    <span>{item.number}</span>

                    <div className="achievement-icon">
                      {Icon && <Icon size={30} />}
                    </div>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Certifications */}
      <section className="certification-section section-padding">
        <div className="container">

          <div className="section-heading">
            <span className="section-eyebrow">
              COMPLIANCE & RECOGNITION
            </span>
            <h2>Certifications & Registrations</h2>
          </div>

          <div className="certification-grid">
            {certifications.map((item, index) => {
              const Icon =
                certificationIcons[
                  index % certificationIcons.length
                ];

              return (
                <div className="certification-card" key={item.id}>
                  <div className="certification-icon">
                    <Icon size={32} />
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

export default Achievements;