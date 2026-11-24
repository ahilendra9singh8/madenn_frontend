import ProjectListing from "../../../../components/sections/ProjectListing";
import { recentProjects } from "../../data/projectData";

function RecentProjects() {
  return (
    <ProjectListing
      title="Recent Projects"
      subtitle="Explore Our Latest Infrastructure Project Portfolio"
      projects={recentProjects}
    />
  );
}

export default RecentProjects;