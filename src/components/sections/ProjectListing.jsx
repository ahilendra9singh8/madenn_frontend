import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import ProjectCard from "../cards/ProjectCard";
import "./ProjectListing.css";

function ProjectListing({ title, subtitle, projects }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(projects.map((project) => project.category)),
    ];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        project.title.toLowerCase().includes(searchText) ||
        project.category.toLowerCase().includes(searchText) ||
        project.location.toLowerCase().includes(searchText);

      const matchesCategory =
        selectedCategory === "All" ||
        project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [projects, search, selectedCategory]);

  return (
    <div className="project-listing-page">

      {/* Banner */}
      <section className="project-listing-banner">
        <div className="project-listing-banner-overlay">
          <div className="container">
            <span>OUR PROJECT PORTFOLIO</span>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </section>

      {/* Listing */}
      <section className="project-listing-section section-padding">
        <div className="container">

          <div className="project-listing-heading">
            <div>
              <span className="section-eyebrow">
                PROJECT PORTFOLIO
              </span>
              <h2>{title}</h2>
              <p>
                Explore our infrastructure project portfolio.
              </p>
            </div>

            <span className="project-result-count">
              {filteredProjects.length} Projects Found
            </span>
          </div>

          {/* Search and Filter */}
          <div className="project-filter-toolbar">

            <div className="project-search-box">
              <Search size={19} />

              <input
                type="text"
                placeholder="Search projects, category or location..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            <div className="project-category-filter">
              <label htmlFor="project-category">
                Category:
              </label>

              <select
                id="project-category"
                value={selectedCategory}
                onChange={(event) =>
                  setSelectedCategory(event.target.value)
                }
              >
                {categories.map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Project Cards */}
          {filteredProjects.length > 0 ? (
            <div className="project-listing-grid">
              {filteredProjects.map((project) => (
                <ProjectCard
                  project={project}
                  key={project.id}
                />
              ))}
            </div>
          ) : (
            <div className="project-empty-state">
              <h3>No Projects Found</h3>
              <p>
                Try another search term or select a different category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

export default ProjectListing;