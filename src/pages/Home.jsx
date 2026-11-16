import { motion } from "framer-motion";
import { ArrowUpRight, Download, GraduationCap } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="availability">
            <span className="status-dot"></span>
            Available for Opportunities
          </div>

          <p className="intro">HELLO, I'M</p>

          <h1>
            Mohammad
            <br />
            <span>Raashid KY.</span>
          </h1>

          <h2>B.E. Artificial Intelligence & Machine Learning</h2>

          {/* EDUCATION DETAILS */}
          <div className="hero-education">
            <GraduationCap size={19} />
            <span>PA College of Engineering</span>
          </div>

          <p className="description">
            Passionate about Artificial Intelligence, Machine Learning
            and building intelligent solutions that solve real-world
            problems. Exploring technology, creating projects and
            turning ideas into reality.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <a href="/projects" className="primary-btn">
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a href="/contact" className="secondary-btn">
              Get In Touch
            </a>

            <a
              href="/resume.pdf"
              download="Mohammad_Raashid_KY_Resume.pdf"
              className="secondary-btn resume-btn"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="social-links">
            <a
              href="https://github.com/raashid-chanu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/mohammad-raashid-ky-b91913394/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </motion.div>

        {/* PROFILE PORTRAIT */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="portrait-glow"></div>

          <div className="portrait-container">
            <img
              src="/raashid-ai-portrait.png"
              alt="Mohammad Raashid KY"
              className="profile-portrait"
            />

            <div className="portrait-badge">
              <span className="status-dot"></span>
              AI / ML Engineer
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;