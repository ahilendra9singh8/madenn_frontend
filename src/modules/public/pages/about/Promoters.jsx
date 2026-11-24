import { promoterData } from "../../data/companyData";
import "./Promoters.css";

function Promoters() {
  const { banner, introduction, promoters } = promoterData;

  return (
    <div className="promoters-page">

      {/* Banner */}
      <section
        className="about-page-banner"
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <div className="about-page-banner-overlay">
          <div className="container">
            <span>OUR LEADERSHIP</span>
            <h1>{banner.title}</h1>
            <p>{banner.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="promoters-intro section-padding">
        <div className="container">

          <span className="section-eyebrow">
            MEET OUR LEADERS
          </span>

          <h2>{introduction.title}</h2>

          <p>{introduction.description}</p>

        </div>
      </section>

      {/* Promoter Cards */}
      <section className="promoters-list-section section-padding">
        <div className="container">

          <div className="section-heading">
            <span className="section-eyebrow">
              OUR MANAGEMENT
            </span>

            <h2>Meet Our Promoters</h2>
          </div>

          <div className="promoters-grid">

            {promoters.map((person) => (
              <div className="promoter-card" key={person.id}>

                <div className="promoter-image">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                  />
                </div>

                <div className="promoter-details">

                  <h3>{person.name}</h3>

                  <span className="promoter-designation">
                    {person.designation}
                  </span>

                  <p>
                    <strong>Qualification:</strong>{" "}
                    {person.qualification}
                  </p>

                  <p>
                    <strong>Experience:</strong>{" "}
                    {person.experience}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}

export default Promoters;