
import {
  Building2,
  CheckCircle,
  CalendarDays,
  MapPinned,
} from "lucide-react";

import { homeStatistics } from "../../modules/public/data/homeData";
import "./Statistics.css";

const iconMap = {
  "building-2": Building2,
  "check-circle": CheckCircle,
  "calendar-days": CalendarDays,
  "map-pinned": MapPinned,
};

function Statistics() {
  return (
    <section className="statistics-section">
      <div className="statistics-container">

        <div className="statistics-heading">
          <span>OUR ACHIEVEMENTS</span>
          <h2>Building Progress Through Performance</h2>
          <p>
            Our commitment to quality, engineering and infrastructure
            development is reflected in our work.
          </p>
        </div>

        <div className="statistics-grid">
          {homeStatistics.map((item) => {
            const Icon = iconMap[item.icon] || Building2;

            return (
              <div className="statistic-card" key={item.id}>
                <div className="statistic-icon">
                  <Icon size={30} strokeWidth={1.6} />
                </div>

                <h3>{item.value}</h3>

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Statistics;