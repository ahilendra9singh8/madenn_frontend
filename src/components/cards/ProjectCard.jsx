import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <Link
        to={`/projects/${project.slug}`}
        className="project-card-image"
        aria-label={`View ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
        />

        <span
          className={`project-status ${
            project.status === "Completed"
              ? "completed"
              : "ongoing"
          }`}
        >
          {project.status}
        </span>
      </Link>

      <div className="project-card-content">

        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-location">
          <MapPin size={15} />
          <span>{project.location}</span>
        </div>

        <div className="project-card-footer">
          <span>{project.dateLabel}</span>

          <Link to={`/projects/${project.slug}`}>
            View Details
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>

    </article>
  );
}

export default ProjectCard;