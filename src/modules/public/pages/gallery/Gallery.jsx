import { useMemo, useState } from "react";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import galleryData from "../../data/galleryData";
import "./Gallery.css";

function Gallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(galleryData.map((item) => item.category)),
    ];
  }, []);

  const filteredImages = useMemo(() => {
    return galleryData.filter((item) => {
      const searchMatch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());

      const categoryMatch =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      return searchMatch && categoryMatch;
    });
  }, [searchTerm, selectedCategory]);

  const showPrevious = () => {
    const currentIndex = filteredImages.findIndex(
      (item) => item.id === selectedImage?.id
    );

    const previousIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;

    setSelectedImage(filteredImages[previousIndex]);
  };

  const showNext = () => {
    const currentIndex = filteredImages.findIndex(
      (item) => item.id === selectedImage?.id
    );

    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="gallery-page">
      <section className="gallery-banner">
        <div className="gallery-banner-overlay">
          <div className="container">
            <span>OUR WORK IN PICTURES</span>
            <h1>Project Gallery</h1>
            <p>
              Explore our infrastructure activities, projects and
              development work across different sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-heading">
            <span className="section-eyebrow">OUR GALLERY</span>
            <h2>Explore Our Work</h2>
            <p>
              A collection of infrastructure and development activities
              across our business sectors.
            </p>
          </div>

          <div className="gallery-toolbar">
            <div className="gallery-search">
              <Search size={19} />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="gallery-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    selectedCategory === category ? "active" : ""
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-grid">
            {filteredImages.length > 0 ? (
              filteredImages.map((item) => (
                <article
                  className="gallery-item"
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                >
                  <img src={item.image} alt={item.alt || item.title} />

                  <div className="gallery-item-overlay">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>View Image</p>
                  </div>
                </article>
              ))
            ) : (
              <div className="gallery-empty">
                <h3>No images found</h3>
                <p>Try another search or category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            <X />
          </button>

          {filteredImages.length > 1 && (
            <>
              <button
                className="lightbox-arrow lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevious();
                }}
                aria-label="Previous image"
              >
                <ChevronLeft />
              </button>

              <button
                className="lightbox-arrow lightbox-next"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
              >
                <ChevronRight />
              </button>
            </>
          )}

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.alt || selectedImage.title}
            />
            <div>
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;