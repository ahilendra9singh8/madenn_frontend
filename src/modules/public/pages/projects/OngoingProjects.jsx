import ProjectListing from "../../../../components/sections/ProjectListing";
import { ongoingProjects } from "../../data/projectData";

function OngoingProjects() {
  return (
    <ProjectListing
      title="Ongoing Projects"
      subtitle="Infrastructure Projects Currently Under Development"
      projects={ongoingProjects}
    />
  );
}

export default OngoingProjects;