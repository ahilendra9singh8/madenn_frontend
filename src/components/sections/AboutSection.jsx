
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Target } from "lucide-react";
import companyInfo from "../../modules/public/data/companyData";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-image-wrapper">
          <img
            src={companyInfo.image}
            alt={companyInfo.imageAlt}
            className="about-image"
          />

          <div className="about-image-caption">
            <span>{companyInfo.experienceValue}</span>
            <strong>{companyInfo.experienceLabel}</strong>
          </div>
        </div>

        <div className="about-content">
          <span className="section-eyebrow">
            {companyInfo.eyebrow}
          </span>

          <h2>{companyInfo.title}</h2>

          <p className="about-description">
            {companyInfo.description}
          </p>

          <p className="about-additional-description">
            {companyInfo.additionalDescription}
          </p>

          <div className="about-values">

            <div className="about-value-item">
              <div className="about-value-icon">
                <Eye size={23} />
              </div>
              <div>
                <h3>{companyInfo.vision.title}</h3>
                <p>{companyInfo.vision.description}</p>
              </div>
            </div>

            <div className="about-value-item">
              <div className="about-value-icon">
                <Target size={23} />
              </div>
              <div>
                <h3>{companyInfo.mission.title}</h3>
                <p>{companyInfo.mission.description}</p>
              </div>
            </div>

          </div>

          <Link to={companyInfo.buttonLink} className="about-button">
            {companyInfo.buttonText}
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;