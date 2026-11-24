import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import businessData from "../../data/businessData";
import "./BusinessDetails.css";

function BusinessDetails() {
  const { slug } = useParams();

  const business = businessData.find(
    (item) => item.slug === slug
  );

  // Invalid business URL
  if (!business) {
    return (
      <section className="business-not-found">
        <div className="container">
          <h2>Business Not Found</h2>

          <p>
            The business sector you are looking for does not exist.
          </p>

          <Link to="/businesses">
            Back to All Businesses
          </Link>
        </div>
      </section>
    );
  }

  // Other business sectors except current sector
  const relatedBusinesses = businessData.filter(
    (item) => item.id !== business.id
  );

  return (
    <div className="business-details-page">

      {/* Banner */}
      <section
        className="business-details-banner"
        style={{
          backgroundImage: `url(${business.bannerImage})`,
        }}
      >
        <div className="business-details-banner-overlay">
          <div className="container">

            <div className="business-breadcrumb">
              <Link to="/">Home</Link>

              <ChevronRight size={15} />

              <Link to="/businesses">Businesses</Link>

              <ChevronRight size={15} />

              <span>{business.title}</span>
            </div>

            <span className="business-banner-label">
              OUR BUSINESS
            </span>

            <h1>{business.title}</h1>

            <p>{business.description}</p>

          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="business-overview section-padding">
        <div className="container business-overview-grid">

          <div className="business-overview-content">

            <span className="section-eyebrow">
              {business.shortTitle}
            </span>

            <h2>Overview</h2>

            <p>{business.overview}</p>

            <Link
              to="/contact"
              className="business-enquiry-button"
            >
              Discuss Your Requirement
              <ArrowRight size={17} />
            </Link>

          </div>

          <div className="business-overview-image">
            <img
              src={business.image}
              alt={business.title}
            />
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="business-services section-padding">
        <div className="container">

          <div className="section-heading">
            <span className="section-eyebrow">
              WHAT WE COVER
            </span>

            <h2>Our Services</h2>

            <p>
              Key service areas associated with this infrastructure
              sector.
            </p>
          </div>

          <div className="business-service-grid">

            {business.services.map((service, index) => (
              <div className="business-service-item" key={index}>
                <CheckCircle2 size={21} />

                <span>{service}</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Capabilities */}
      <section className="business-capabilities section-padding">
        <div className="container business-capabilities-grid">

          <div>
            <span className="section-eyebrow">
              OUR EXPERTISE
            </span>

            <h2>Our Capabilities</h2>

            <p>
              Our approach emphasizes planning, coordination,
              monitoring and quality-focused infrastructure
              execution.
            </p>
          </div>

          <div className="business-capability-list">

            {business.capabilities.map((item, index) => (
              <div className="business-capability-item" key={index}>
                <CheckCircle2 size={19} />
                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="business-benefits section-padding">
        <div className="container">

          <div className="section-heading">
            <span className="section-eyebrow">
              OUR CONTRIBUTION
            </span>

            <h2>Infrastructure Impact</h2>
          </div>

          <div className="business-benefit-grid">

            {business.benefits.map((item, index) => (
              <div className="business-benefit-card" key={index}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item}</h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Related Businesses */}
      <section className="related-businesses section-padding">
        <div className="container">

          <div className="section-heading">
            <span className="section-eyebrow">
              EXPLORE MORE
            </span>

            <h2>Other Business Sectors</h2>
          </div>

          <div className="related-business-grid">

            {relatedBusinesses.slice(0, 3).map((item) => (
              <Link
                to={`/businesses/${item.slug}`}
                className="related-business-card"
                key={item.id}
              >
                <img src={item.image} alt={item.title} />

                <div>
                  <h3>{item.title}</h3>
                  <span>
                    Explore
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}

          </div>

          <div className="all-businesses-link">
            <Link to="/businesses">
              View All Business Sectors
              <ArrowRight size={17} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

export default BusinessDetails;