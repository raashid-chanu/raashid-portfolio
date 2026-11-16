import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>MR<span>.</span></h2>

          <p>
            Building intelligent solutions through
            technology, creativity and innovation.
          </p>

          <div className="footer-socials">

            <a
              href="https://github.com/raashid-chanu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mohammad-raashid-ky-b91913394/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
        </div>

        {/* EXPLORE */}
        <div className="footer-links">
          <h3>Explore</h3>

          <Link to="/certifications">Certifications</Link>
          <Link to="/achievements">Achievements</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Let's Connect</h3>

          <p>
            Have an opportunity or interesting project?
            Let's connect.
          </p>

          <Link to="/contact" className="footer-contact-btn">
            Get In Touch <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Mohammad Raashid KY.
          All rights reserved.
        </p>

        <p>Designed & Built with passion.</p>
      </div>

    </footer>
  );
}

export default Footer;