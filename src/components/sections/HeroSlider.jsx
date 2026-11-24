
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import heroSlides from "../../modules/public/data/homeData";
import "./HeroSlider.css";

function HeroSlider() {
  return (
    <section className="hero-slider-section">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        speed={900}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">

              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="hero-background-image"
              />

              <div className="hero-overlay"></div>

              <div className="hero-content container">
                <div className="hero-text-content">

                  <span className="hero-eyebrow">
                    {slide.eyebrow}
                  </span>

                  <h1>
                    {slide.title.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h1>

                  <p>{slide.description}</p>

                  <div className="hero-buttons">
                    <Link
                      to={slide.buttonLink}
                      className="hero-primary-button"
                    >
                      {slide.buttonText}
                    </Link>

                    <Link
                      to={slide.secondaryButtonLink}
                      className="hero-secondary-button"
                    >
                      {slide.secondaryButtonText}
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlider;