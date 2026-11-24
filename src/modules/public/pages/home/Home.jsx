
import HeroSlider from "../../../../components/sections/HeroSlider";
import Statistics from "../../../../components/sections/Statistics";
import AboutSection from "../../../../components/sections/AboutSection";
import BusinessSection from "../../../../components/sections/BusinessSection";
import ProjectSection from "../../../../components/sections/ProjectSection";
import ClientSection from "../../../../components/sections/ClientSection";
import GallerySection from "../../../../components/sections/GallerySection";
import EnquirySection from "../../../../components/sections/EnquirySection";

import "./Home.css";

function Home() {
  return (
    <>
      <HeroSlider />
      <Statistics />
      <AboutSection />
      <BusinessSection />
      <ProjectSection />
      <ClientSection />
      <GallerySection />
      <EnquirySection />
    </>
  );
}

export default Home;
