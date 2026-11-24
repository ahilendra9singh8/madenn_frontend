import {
  TrendingUp,
  Cpu,
  Leaf,
  Target,
  Users,
  Handshake,
} from "lucide-react";

import { futureStrategyData } from "../../data/companyData";
import "./FutureStrategy.css";

const iconMap = {
  "trending-up": TrendingUp,
  cpu: Cpu,
  leaf: Leaf,
  target: Target,
  users: Users,
  handshake: Handshake,
};

function FutureStrategy() {
  const { banner, introduction, strategies } =
    futureStrategyData;

  return (
    <div className="future-strategy-page">

      {/* Banner */}
      <section
        className="about-page-banner"
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <div className="about-page-banner-overlay">
          <div className="container">
            <span>OUR ROADMAP</span>
            <h1>{banner.title}</h1>
            <p>{banner.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="future-intro section-padding">
        <div className="container future-intro-grid">

          <div className="future-intro-image">
            <img
              src={introduction.image}
              alt="Future infrastructure development"
            />
          </div>

          <div className="future-intro-content">
            <span className="section-eyebrow">
              {introduction.eyebrow}
            </span>

            <h2>{introduction.title}</h2>

            <p>{introduction.description}</p>
          </div>

        </div>
      </section>

      {/* Strategies */}
      <section className="future-strategies section-padding">
        <div className="container">

          <div className="section-heading">
            <span className="section-eyebrow">
              OUR PRIORITIES
            </span>

            <h2>Our Strategic Focus Areas</h2>

            <p>
              Our key priorities for long-term growth and development.
            </p>
          </div>

          <div className="future-strategy-grid">

            {strategies.map((item, index) => {
              const Icon = iconMap[item.icon];

              return (
                <div
                  className="future-strategy-card"
                  key={item.id}
                >
                  <div className="future-strategy-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="future-strategy-icon">
                    {Icon && <Icon size={32} />}
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

export default FutureStrategy;