import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import businessData from "../../data/businessData";
import "./BusinessList.css";

function BusinessList() {
  return (
    <div className="business-list-page">

      {/* Page Banner */}
      <section className="business-list-banner">
        <div className="business-list-banner-overlay">
          <div className="container">
            <span>WHAT WE DO</span>
            <h1>Our Businesses</h1>
            <p>
              Comprehensive Infrastructure Solutions Across
              Multiple Sectors
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="business-list-intro section-padding">
        <div className="container">
          <span className="section-eyebrow">
            OUR BUSINESS VERTICALS
          </span>

          <h2>Infrastructure Solutions for a Better Tomorrow</h2>

          <p>
            We focus on multiple infrastructure sectors with an
            approach centered on engineering, quality, technology
            and sustainable development.
          </p>
        </div>
      </section>

      {/* Business Cards */}
      <section className="business-list-content section-padding">
        <div className="container">

          <div className="business-list-heading">
            <div>
              <span className="section-eyebrow">
                EXPLORE OUR SECTORS
              </span>
              <h2>Our Business Areas</h2>
            </div>

            <span className="business-count">
              {businessData.length} Business Sectors
            </span>
          </div>

          <div className="business-list-grid">

            {businessData.map((business) => (
              <article
                className="business-list-card"
                key={business.id}
              >

                <Link
                  to={`/businesses/${business.slug}`}
                  className="business-list-image"
                  aria-label={`Explore ${business.title}`}
                >
                  <img
                    src={business.image}
                    alt={business.title}
                    loading="lazy"
                  />

                  <span className="business-image-number">
                    {String(business.id).padStart(2, "0")}
                  </span>
                </Link>

                <div className="business-list-card-content">

                  <span className="business-card-category">
                    {business.shortTitle}
                  </span>

                  <h3>{business.title}</h3>

                  <p>{business.description}</p>

                  <Link
                    to={`/businesses/${business.slug}`}
                    className="business-explore-link"
                  >
                    Explore Business
                    <ArrowRight size={17} />
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}

export default BusinessList;