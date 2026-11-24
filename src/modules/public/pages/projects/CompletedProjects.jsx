import ProjectListing from "../../../../components/sections/ProjectListing";
import { completedProjects } from "../../data/projectData";

function CompletedProjects() {
  return (
    <ProjectListing
      title="Completed Projects"
      subtitle="Infrastructure Projects Successfully Completed"
      projects={completedProjects}
    />
  );
}

export default CompletedProjects;