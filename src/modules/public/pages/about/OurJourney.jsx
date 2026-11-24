import { journeyData } from "../../data/companyData";
import "./OurJourney.css";

function OurJourney() {
  const { banner, milestones } = journeyData;

  return (
    <div className="our-journey-page">

      {/* Banner */}
      <section
        className="about-page-banner"
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <div className="about-page-banner-overlay">
          <div className="container">
            <span>OUR STORY</span>
            <h1>{banner.title}</h1>
            <p>{banner.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="journey-intro section-padding">
        <div className="container">
          <span className="section-eyebrow">OUR GROWTH</span>

          <h2>Every Step Builds Our Future</h2>

          <p>
            Our journey represents our commitment to infrastructure
            development, continuous improvement and creating
            long-term value through engineering and technology.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="journey-timeline-section section-padding">
        <div className="container">

          <div className="section-heading">
            <span className="section-eyebrow">OUR MILESTONES</span>
            <h2>Our Journey So Far</h2>
          </div>

          <div className="journey-timeline">

            {milestones.map((item, index) => (
              <div
                className={`journey-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                key={item.id}
              >
                <div className="journey-content">

                  <span className="journey-year">
                    {item.year}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>

                <div className="journey-dot"></div>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}

export default OurJourney;