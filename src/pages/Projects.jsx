import { motion } from "framer-motion";

import {
  ArrowUpRight,
  BrainCircuit,
  ShoppingCart,
  ShieldCheck,
  Camera,
  Activity,
  BriefcaseBusiness
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

function Projects() {

  const projects = [
    {
      number: "01",
      title: "CareerPilot AI",
      category: "AI Career Assistant",
      description:
        "An AI-powered career and placement assistant designed to help engineering students with resume analysis, interview preparation, career guidance and skill development.",
      technologies: ["React", "FastAPI", "Gemini API"],
      icon: <BriefcaseBusiness />,
      status: "In Progress"
    },
    {
      number: "02",
      title: "BurnoutGuard AI",
      category: "Machine Learning",
      description:
        "An AI-based burnout prediction application that uses machine learning to analyze relevant factors and help identify potential burnout risks.",
      technologies: ["Python", "Flask", "Scikit-learn", "SQLite"],
      icon: <Activity />,
      status: "Project",
      github: "https://github.com/raashid-chanu/burnoutguard-ai"
    },
    {
      number: "03",
      title: "Fake News Detector",
      category: "Artificial Intelligence",
      description:
        "A machine learning-based application designed to classify news content and identify potentially misleading information.",
      technologies: ["Python", "Pandas", "Scikit-learn"],
      icon: <ShieldCheck />,
      status: "Project",
      github: "https://github.com/raashid-chanu/fake-news-ai-backend"
    },
    {
      number: "04",
      title: "ShopEase E-Commerce",
      category: "Web Development",
      description:
        "An e-commerce website developed as a college project, focusing on online shopping functionality and user interaction.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      icon: <ShoppingCart />,
      status: "Project",
      github: "https://github.com/raashid-chanu/ShopEase-Ecommerce"
    },
    {
      number: "05",
      title: "Face Recognition Attendance",
      category: "Computer Vision",
      description:
        "A face recognition-based attendance management system developed using the LBPH face recognition algorithm.",
      technologies: ["Python", "OpenCV", "LBPH"],
      icon: <Camera />,
      status: "Project"
    },
    {
      number: "06",
      title: "X-Diagnostix",
      category: "Hackathon Project",
      description:
        "A collaborative hackathon project exploring AI-assisted healthcare and predictive workflows.",
      technologies: ["AI", "Machine Learning", "Python"],
      icon: <BrainCircuit />,
      status: "Hackathon",
      github: "https://github.com/Sinansinu19/X-Diagnostix"
    }
  ];

  return (
    <div className="projects-page">

      {/* HEADER */}

      <section className="projects-hero">

        <p className="section-label">
          WHAT I'VE BUILT
        </p>

        <h1>
          My <span>Projects.</span>
        </h1>

        <p>
          A collection of projects where I explore ideas,
          experiment with technology and develop practical solutions.
        </p>

      </section>

      {/* PROJECT GRID */}

      <section className="projects-section">

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.div
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              whileHover={{ y: -8 }}
            >

              <div className="project-top">

                <div className="project-icon">
                  {project.icon}
                </div>

                <span className="project-number">
                  {project.number}
                </span>

              </div>

              <div className="project-category">
                {project.category}
              </div>

              <h2>{project.title}</h2>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tags">

                {project.technologies.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

              <div className="project-bottom">

                <span className="project-status">
                  {project.status}
                </span>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="project-link"
                  >
                    <FaGithub size={19} />
                    <ArrowUpRight size={17} />
                  </a>
                )}

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* BOTTOM SECTION */}

      <section className="projects-cta">

        <h2>
          Have an interesting idea?
        </h2>

        <p>
          I'm always interested in learning, collaborating
          and building something meaningful.
        </p>

        <a href="/contact">
          Let's Connect <ArrowUpRight size={18} />
        </a>

      </section>

    </div>
  );
}

export default Projects;