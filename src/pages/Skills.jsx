import { motion } from "framer-motion";

import {
  Code2,
  BrainCircuit,
  Globe,
  Database,
  Wrench,
  Terminal,
  Cpu,
  Laptop
} from "lucide-react";

function Skills() {

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 />,
      description: "Languages I use to build software and applications.",
      skills: ["Python", "Java", "C", "PHP"]
    },
    {
      title: "AI & Machine Learning",
      icon: <BrainCircuit />,
      description: "Technologies related to intelligent systems.",
      skills: ["Machine Learning", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
      title: "Web Development",
      icon: <Globe />,
      description: "Frontend and backend development technologies.",
      skills: ["HTML", "CSS", "JavaScript", "React", "FastAPI", "Flask"]
    },
    {
      title: "Databases",
      icon: <Database />,
      description: "Database technologies and data management.",
      skills: ["MySQL", "SQLite", ,"MongoDB"]
    },
    {
      title: "Developer Tools",
      icon: <Wrench />,
      description: "Tools used for development and collaboration.",
      skills: ["VS Code", "Git", "GitHub", "Antigravity"]
    },
    {
      title: "Development Environment",
      icon: <Terminal />,
      description: "Technologies and environments I explore.",
      skills: ["Python Environment", "Virtual Environments", "Jupyter Notebook", "Anaconda","vite"]
    }
  ];

  return (
    <div className="skills-page">

      {/* HEADER */}

      <section className="skills-hero">

        <p className="section-label">
          MY TECHNICAL EXPERTISE
        </p>

        <h1>
          Skills & <span>Technologies.</span>
        </h1>

        <p>
          The technologies, programming languages and tools
          I use to learn, experiment and build projects.
        </p>

      </section>

      {/* SKILLS GRID */}

      <section className="skills-section">

        <div className="skills-grid">

          {skillCategories.map((category, index) => (

            <motion.div
              className="skill-card"
              key={category.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              whileHover={{ y: -8 }}
            >

              <div className="skill-icon">
                {category.icon}
              </div>

              <h2>{category.title}</h2>

              <p>{category.description}</p>

              <div className="skill-tags">

                {category.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* BOTTOM SECTION */}

      <section className="skills-bottom">

        <Cpu size={35} />

        <h2>
          Always Learning. Always Building.
        </h2>

        <p>
          Technology never stops evolving, and neither does
          my curiosity. I'm continuously exploring new tools,
          frameworks and technologies.
        </p>

      </section>

    </div>
  );
}

export default Skills;