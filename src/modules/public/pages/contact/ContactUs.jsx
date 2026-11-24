import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";
import contactInfo from "../../data/contactData";
import "./ContactUs.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  subject: "",
  message: "",
};

function ContactUs() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enquiryData = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    // Demo only: connect this form to your backend API later.
    console.log("Contact enquiry:", enquiryData);

    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <div className="contact-page">
      <section className="contact-banner">
        <div className="contact-banner-overlay">
          <div className="container">
            <span>LET'S CONNECT</span>
            <h1>Contact Us</h1>
            <p>
              Have a project or business enquiry? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container">
          <div className="contact-heading">
            <span className="section-eyebrow">GET IN TOUCH</span>
            <h2>We Would Love to Hear From You</h2>
            <p>
              Contact us for project enquiries, business opportunities,
              partnerships and general information.
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-information">
              <h3>Contact Information</h3>
              <p className="contact-info-intro">
                Reach out to MADENN DEVELOPERS PRIVATE LIMITED.
              </p>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={21} />
                </div>
                <div>
                  <h4>Office Address</h4>
                  <p>{contactInfo.address.line1}</p>
                  <p>{contactInfo.address.line2}</p>
                </div>
              </div>

              {contactInfo.phone.map((item) => (
                <div className="contact-info-item" key={item.id}>
                  <div className="contact-info-icon">
                    <Phone size={21} />
                  </div>
                  <div>
                    <h4>{item.label}</h4>
                    <a href={item.link}>{item.number}</a>
                  </div>
                </div>
              ))}

              {contactInfo.email.map((item) => (
                <div className="contact-info-item" key={item.id}>
                  <div className="contact-info-icon">
                    <Mail size={21} />
                  </div>
                  <div>
                    <h4>{item.label}</h4>
                    <a href={item.link}>{item.address}</a>
                  </div>
                </div>
              ))}

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Clock size={21} />
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>{contactInfo.workingHours.days}</p>
                  <p>{contactInfo.workingHours.time}</p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h3>Send Us an Enquiry</h3>
              <p>Fill out the form and share your requirements with us.</p>

              {submitted && (
                <div className="contact-success-message">
                  Your demo enquiry was submitted on this page.
                  It has not been sent to the company yet.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <div className="contact-form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      pattern="[0-9]{10}"
                      title="Enter a 10-digit phone number"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label>Service / Sector *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a sector</option>
                      {contactInfo.services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact-form-group contact-form-full">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enquiry subject"
                    />
                  </div>

                  <div className="contact-form-group contact-form-full">
                    <label>Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Write your enquiry..."
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="contact-submit-btn">
                  <Send size={17} />
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="container">
          <div className="contact-map-heading">
            <span className="section-eyebrow">OUR LOCATION</span>
            <h2>Visit Our Office</h2>
            <p>
              The exact office location will be displayed here after the
              company address is confirmed.
            </p>
          </div>

          <div className="contact-map-placeholder">
            <MapPin size={38} />
            <h3>Office Location</h3>
            <p>
              {contactInfo.address.fullAddress}
            </p>
            <span>Map location to be updated</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;