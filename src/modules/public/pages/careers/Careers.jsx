import { useMemo, useState } from "react";
import { MapPin, BriefcaseBusiness, Clock, Search } from "lucide-react";
import careerData from "../../data/careerData";
import "./Careers.css";

function Careers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const [application, setApplication] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    position: "",
    resumeLink: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const departments = useMemo(
    () => ["All", ...new Set(careerData.map((job) => job.department))],
    []
  );

  const filteredJobs = useMemo(() => {
    return careerData.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDepartment =
        selectedDepartment === "All" ||
        job.department === selectedDepartment;

      return matchesSearch && matchesDepartment;
    });
  }, [searchTerm, selectedDepartment]);

  const handleChange = (e) => {
    setApplication({
      ...application,
      [e.target.name]: e.target.value,
    });
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setApplication((previous) => ({
      ...previous,
      position: job.title,
    }));
    setSubmitted(false);

    setTimeout(() => {
      document
        .getElementById("career-application")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const applicationData = {
      ...application,
      appliedFor: selectedJob?.title || application.position,
      submittedAt: new Date().toISOString(),
    };

    // Demo only: replace with API request when backend is ready.
    console.log("Career application:", applicationData);

    setSubmitted(true);
    setApplication({
      name: "",
      email: "",
      phone: "",
      experience: "",
      position: "",
      resumeLink: "",
      message: "",
    });
  };

  return (
    <div className="careers-page">
      <section className="careers-banner">
        <div className="careers-banner-overlay">
          <div className="container">
            <span>BUILD YOUR FUTURE WITH US</span>
            <h1>Careers at MADENN</h1>
            <p>
              Be part of a team working to develop infrastructure and
              build a better future.
            </p>
            <a href="#career-openings" className="career-banner-btn">
              Explore Opportunities
            </a>
          </div>
        </div>
      </section>

      <section className="careers-intro">
        <div className="container careers-intro-inner">
          <div>
            <span className="section-eyebrow">CAREER OPPORTUNITIES</span>
            <h2>Grow With MADENN DEVELOPERS</h2>
          </div>
          <p>
            We believe that our people are an important part of every
            successful project. Explore opportunities to work with our
            engineering, site operations and project management teams.
          </p>
        </div>
      </section>

      <section className="career-openings" id="career-openings">
        <div className="container">
          <div className="career-section-heading">
            <span className="section-eyebrow">JOIN OUR TEAM</span>
            <h2>Current Openings</h2>
            <p>Explore the positions listed below.</p>
          </div>

          <div className="career-toolbar">
            <div className="career-search">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search job title or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department === "All" ? "All Departments" : department}
                </option>
              ))}
            </select>
          </div>

          <div className="career-job-grid">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <article className="career-job-card" key={job.id}>
                  <div className="career-job-top">
                    <span>{job.department}</span>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                  </div>

                  <div className="career-job-meta">
                    <span>
                      <MapPin size={16} />
                      {job.location}
                    </span>
                    <span>
                      <BriefcaseBusiness size={16} />
                      {job.employmentType}
                    </span>
                    <span>
                      <Clock size={16} />
                      {job.experience}
                    </span>
                  </div>

                  <div className="career-job-actions">
                    <button
                      className="career-details-btn"
                      onClick={() =>
                        setSelectedJob(
                          selectedJob?.id === job.id ? null : job
                        )
                      }
                    >
                      {selectedJob?.id === job.id
                        ? "Hide Details"
                        : "View Details"}
                    </button>

                    <button
                      className="career-apply-btn"
                      onClick={() => handleApply(job)}
                    >
                      Apply Now
                    </button>
                  </div>

                  {selectedJob?.id === job.id && (
                    <div className="career-job-details">
                      <h4>Responsibilities</h4>
                      <ul>
                        {job.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <h4>Requirements</h4>
                      <ul>
                        {job.requirements.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              ))
            ) : (
              <div className="career-no-jobs">
                <h3>No matching jobs found</h3>
                <p>Try changing your search or department.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="career-application-section" id="career-application">
        <div className="container">
          <div className="career-section-heading">
            <span className="section-eyebrow">TAKE THE NEXT STEP</span>
            <h2>Apply for a Position</h2>
            <p>
              Fill in your details and our team can review your application
              once the application API is connected.
            </p>
          </div>

          <form className="career-application-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="career-success-message">
                Your demo application has been submitted on this page.
                It has not been sent to the company yet.
              </div>
            )}

            <div className="career-form-grid">
              <div className="career-form-group">
                <label>Full Name *</label>
                <input
                  name="name"
                  value={application.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="career-form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={application.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="career-form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={application.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit phone number"
                  required
                />
              </div>

              <div className="career-form-group">
                <label>Experience</label>
                <input
                  name="experience"
                  value={application.experience}
                  onChange={handleChange}
                  placeholder="e.g. 3 years / Fresher"
                />
              </div>

              <div className="career-form-group">
                <label>Applying For *</label>
                <select
                  name="position"
                  value={application.position}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Position</option>
                  {careerData.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="career-form-group">
                <label>Resume Link</label>
                <input
                  type="url"
                  name="resumeLink"
                  value={application.resumeLink}
                  onChange={handleChange}
                  placeholder="Paste Google Drive / portfolio link"
                />
              </div>

              <div className="career-form-group career-form-full">
                <label>Message</label>
                <textarea
                  name="message"
                  value={application.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us briefly about yourself..."
                />
              </div>
            </div>

            <button type="submit" className="career-submit-btn">
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Careers;