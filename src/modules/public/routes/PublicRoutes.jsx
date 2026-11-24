
import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/home/Home";
import CompanyProfile from "../pages/about/CompanyProfile";
import OurJourney from "../pages/about/OurJourney";
import Promoters from "../pages/about/Promoters";
import Achievements from "../pages/about/Achievements";
import FutureStrategy from "../pages/about/FutureStrategy";
import BusinessList from "../pages/businesses/BusinessList";
import BusinessDetails from "../pages/businesses/BusinessDetails";
import CompletedProjects from "../pages/projects/CompletedProjects";
import OngoingProjects from "../pages/projects/OngoingProjects";
import RecentProjects from "../pages/projects/RecentProjects";
import ProjectDetails from "../pages/projects/ProjectDetails";
import Clientele from "../pages/clientele/Clientele";
import Gallery from "../pages/gallery/Gallery";
import Careers from "../pages/careers/Careers";
import ContactUs from "../pages/contact/ContactUs";
import CorporateBrochure from "../pages/brochure/CorporateBrochure";
import Login from "../pages/login/Login";

import NotFound from "../../../components/common/NotFound";

function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
        <Route
          path="about/company-profile"
          element={<CompanyProfile />}
        />

        <Route
          path="about/our-journey"
          element={<OurJourney />}
        />

        <Route
          path="about/promoters"
          element={<Promoters />}
        />
        <Route
          path="about/achievements"
          element={<Achievements />}
        />

        <Route
          path="about/future-strategy"
          element={<FutureStrategy />}
        />
        <Route
          path="businesses"
          element={<BusinessList />}
        />

        <Route
          path="businesses/:slug"
          element={<BusinessDetails />}
        />
        <Route
          path="projects/completed"
          element={<CompletedProjects />}
        />

        <Route
          path="projects/ongoing"
          element={<OngoingProjects />}
        />

        <Route
          path="projects/recent"
          element={<RecentProjects />}
        />

        <Route
          path="projects/:slug"
          element={<ProjectDetails />}
        />
        <Route path="clientele"
          element={<Clientele />}
        />
        <Route path="gallery" element={<Gallery />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="brochure" element={<CorporateBrochure />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default PublicRoutes;