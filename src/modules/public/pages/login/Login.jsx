
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import loginData from "../../data/loginData";
import "./Login.css";

function Login() {
  const [role, setRole] = useState("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Demo only: real authentication will be handled by the backend.
    setMessage(
      `${role === "admin" ? "Admin" : "Customer"} login UI is ready. Backend authentication is not connected yet.`
    );
  };

  return (
    <div className="login-page">
      <div className="login-background">
        <div className="login-container">

          <div className="login-brand-panel">
            <div className="login-brand-content">
              <div className="login-brand-logo">
                <Building2 size={34} />
              </div>

              <h1>{loginData.companyName}</h1>
              <span>{loginData.subtitle}</span>

              <div className="login-brand-line"></div>

              <h2>Building Infrastructure.<br />Connecting Progress.</h2>

              <p>
                Infrastructure solutions built on quality engineering,
                trust and commitment.
              </p>
            </div>

            <div className="login-brand-footer">
              © {new Date().getFullYear()} MADENN DEVELOPERS PRIVATE LIMITED
            </div>
          </div>

          <div className="login-form-panel">
            <div className="login-form-content">

              <div className="login-mobile-brand">
                <Building2 size={30} />
                <span>MADENN</span>
              </div>

              <span className="login-welcome-label">ACCOUNT ACCESS</span>
              <h2>{loginData.heading}</h2>
              <p className="login-description">
                {loginData.description}
              </p>

              <div className="login-role-heading">
                <span>Login As</span>
              </div>

              <div className="login-role-options">
                {loginData.roles.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className={`login-role-card ${
                      role === item.id ? "active" : ""
                    }`}
                    onClick={() => {
                      setRole(item.id);
                      setMessage("");
                    }}
                  >
                    <span className="login-role-radio">
                      {role === item.id && <span />}
                    </span>

                    <span className="login-role-text">
                      <strong>{item.label}</strong>
                      <small>{item.description}</small>
                    </span>
                  </button>
                ))}
              </div>

              <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="login-email">
                  {loginData.fields.emailLabel}
                </label>

                <div className="login-input-wrapper">
                  <Mail size={18} />
                  <input
                    id="login-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>

                <label htmlFor="login-password">
                  {loginData.fields.passwordLabel}
                </label>

                <div className="login-input-wrapper">
                  <LockKeyhole size={18} />
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />

                  <button
                    type="button"
                    className="login-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <div className="login-forgot-row">
                  <Link to="/contact">Forgot Password?</Link>
                </div>

                <button type="submit" className="login-submit-btn">
                  Sign In <ArrowRight size={18} />
                </button>

                {message && (
                  <div className="login-message" role="status">
                    {message}
                  </div>
                )}
              </form>

              <div className="login-security-note">
                <ShieldCheck size={17} />
                <span>Secure account access</span>
              </div>

              <div className="login-back-home">
                <Link to="/">← Back to Website</Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
