
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import featuredProjects from "../../modules/public/data/projectData";
import "./ProjectSection.css";

function ProjectSection() {
  return (
    <section className="project-section">
      <div className="project-container">

        <div className="project-heading">
          <div>
            <span className="section-eyebrow">OUR WORK</span>
            <h2>Featured Projects</h2>
            <p>
              Explore selected infrastructure projects across
              our business sectors.
            </p>
          </div>

          <Link to="/projects/completed" className="project-view-all">
            View All Projects <ArrowRight size={17} />
          </Link>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.id}>

              <Link
                to={project.link}
                className="project-image-link"
                aria-label={`View ${project.title}`}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />

                  <span
                    className={`project-status ${
                      project.status.toLowerCase() === "ongoing"
                        ? "status-ongoing"
                        : "status-completed"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </Link>

              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  <Link to={project.link}>{project.title}</Link>
                </h3>

                <div className="project-location">
                  <MapPin size={15} />
                  <span>{project.location}</span>
                </div>

                <p>{project.description}</p>

                <Link to={project.link} className="project-details-link">
                  Project Details <ArrowRight size={16} />
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectSection;