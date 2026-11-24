import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Building2,
  CalendarDays,
} from "lucide-react";

import { projectsData } from "../../data/projectData";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projectsData.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <section className="project-not-found">
        <div className="container">
          <h2>Project Not Found</h2>
          <p>The project you are looking for does not exist.</p>

          <Link to="/projects/completed">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="project-details-page">

      {/* Banner */}
      <section
        className="project-details-banner"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="project-details-banner-overlay">
          <div className="container">

            <div className="project-details-breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={15} />
              <Link to="/projects/completed">Projects</Link>
              <ChevronRight size={15} />
              <span>{project.title}</span>
            </div>

            <span className="project-details-category">
              {project.category}
            </span>

            <h1>{project.title}</h1>

            <p>{project.description}</p>

            <span
              className={`project-status ${
                project.status === "Completed"
                  ? "completed"
                  : "ongoing"
              }`}
            >
              {project.status}
            </span>

          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="project-information section-padding">
        <div className="container">

          <div className="project-information-grid">

            <div className="project-information-item">
              <Building2 size={25} />
              <div>
                <span>Client</span>
                <h3>{project.client}</h3>
              </div>
            </div>

            <div className="project-information-item">
              <MapPin size={25} />
              <div>
                <span>Location</span>
                <h3>{project.location}</h3>
              </div>
            </div>

            <div className="project-information-item">
              <CalendarDays size={25} />
              <div>
                <span>Project Period</span>
                <h3>{project.dateLabel}</h3>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Overview */}
      <section className="project-overview section-padding">
        <div className="container project-overview-grid">

          <div>
            <span className="section-eyebrow">
              PROJECT INFORMATION
            </span>

            <h2>Project Overview</h2>

            <p>{project.overview}</p>
          </div>

          <div className="project-overview-image">
            <img
              src={project.image}
              alt={project.title}
            />
          </div>

        </div>
      </section>

      {/* Scope */}
      <section className="project-scope section-padding">
        <div className="container">

          <div className="section-heading">
            <span className="section-eyebrow">
              PROJECT EXECUTION
            </span>

            <h2>Scope of Work</h2>
          </div>

          <div className="project-scope-grid">

            {project.scope.map((item, index) => (
              <div className="project-scope-item" key={index}>
                <CheckCircle2 size={21} />
                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Highlights */}
      <section className="project-highlights section-padding">
        <div className="container">

          <div className="section-heading">
            <span className="section-eyebrow">
              KEY FEATURES
            </span>

            <h2>Project Highlights</h2>
          </div>

          <div className="project-highlight-grid">

            {project.highlights.map((item, index) => (
              <div className="project-highlight-card" key={index}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item}</h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="project-gallery section-padding">
        <div className="container">

          <div className="section-heading">
            <span className="section-eyebrow">
              PROJECT PHOTOS
            </span>

            <h2>Project Gallery</h2>
          </div>

          <div className="project-gallery-grid">

            {project.gallery.map((image, index) => (
              <div className="project-gallery-image" key={index}>
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Back */}
      <section className="project-back-section">
        <div className="container">
          <Link to="/projects/completed">
            <ArrowLeft size={17} />
            Back to Projects
          </Link>
        </div>
      </section>

    </div>
  );
}

export default ProjectDetails;