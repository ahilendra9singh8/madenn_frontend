
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import businessData from "../../modules/public/data/businessData";
import "./EnquirySection.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function EnquirySection() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Demo only: API integration will be added later.
    console.log("Enquiry form data:", formData);

    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <section className="enquiry-section">
      <div className="enquiry-container">

        <div className="enquiry-info">
          <span className="section-eyebrow">GET IN TOUCH</span>

          <h2>Let's Build Something Great Together</h2>

          <p>
            Have an infrastructure project or business enquiry?
            Contact our team to discuss your requirements.
          </p>

          <div className="enquiry-contact-list">

            <div className="enquiry-contact-item">
              <span className="enquiry-contact-icon">
                <Mail size={21} />
              </span>
              <div>
                <h3>Email Us</h3>
                <p>info@madenndevelopers.com</p>
              </div>
            </div>

            <div className="enquiry-contact-item">
              <span className="enquiry-contact-icon">
                <Phone size={21} />
              </span>
              <div>
                <h3>Call Us</h3>
                <p>+91 9876543210</p>
              </div>
            </div>

            <div className="enquiry-contact-item">
              <span className="enquiry-contact-icon">
                <MapPin size={21} />
              </span>
              <div>
                <h3>Our Location</h3>
                <p>India</p>
              </div>
            </div>

          </div>
        </div>

        <div className="enquiry-form-wrapper">
          <h3>Send Your Enquiry</h3>
          <p>Fill in the details below and our team will get in touch.</p>

          <form onSubmit={handleSubmit} className="enquiry-form">

            <div className="enquiry-form-row">
              <div className="enquiry-field">
                <label htmlFor="enquiry-name">Full Name *</label>
                <input
                  id="enquiry-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="enquiry-field">
                <label htmlFor="enquiry-email">Email Address *</label>
                <input
                  id="enquiry-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="enquiry-form-row">
              <div className="enquiry-field">
                <label htmlFor="enquiry-phone">Phone Number *</label>
                <input
                  id="enquiry-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  pattern="[0-9+() -]{7,20}"
                  required
                />
              </div>

              <div className="enquiry-field">
                <label htmlFor="enquiry-service">Interested Sector *</label>
                <select
                  id="enquiry-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a sector</option>

                  {businessData.map((business) => (
                    <option key={business.id} value={business.title}>
                      {business.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="enquiry-field">
              <label htmlFor="enquiry-message">Your Message *</label>
              <textarea
                id="enquiry-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or requirement..."
                rows="5"
                required
              />
            </div>

            <button type="submit" className="enquiry-submit-button">
              Submit Enquiry <Send size={17} />
            </button>

            {submitted && (
              <p className="enquiry-demo-message" role="status">
                Demo submission successful. Your form data is currently
                available in the browser console; no enquiry has been sent
                to the company yet.
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}

export default EnquirySection;
