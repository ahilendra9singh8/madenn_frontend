
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import galleryData from "../../modules/public/data/galleryData";
import "./GallerySection.css";

function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(galleryData.map((item) => item.category)),
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="home-gallery-section">
      <div className="home-gallery-container">

        <div className="home-gallery-heading">
          <span className="section-eyebrow">PROJECT GALLERY</span>
          <h2>Our Work in Pictures</h2>
          <p>
            A glimpse of infrastructure development and engineering
            activities across different sectors.
          </p>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "gallery-filter active"
                  : "gallery-filter"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="home-gallery-grid">
          {filteredImages.map((item) => (
            <div className="home-gallery-card" key={item.id}>
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />

              <div className="home-gallery-overlay">
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>

                <span className="gallery-open-icon">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="home-gallery-footer">
          <Link to="/gallery">
            Explore Full Gallery <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default GallerySection;
