import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  BrainCircuit,
  Rocket,
  Target,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

function About() {
  const interests = [
    {
      icon: <BrainCircuit />,
      title: "Artificial Intelligence",
      description:
        "Exploring AI, machine learning and intelligent applications."
    },
    {
      icon: <Code2 />,
      title: "Software Development",
      description:
        "Building practical applications using programming and modern technologies."
    },
    {
      icon: <Lightbulb />,
      title: "Innovation",
      description:
        "Turning creative ideas into meaningful technical solutions."
    },
    {
      icon: <Rocket />,
      title: "Continuous Learning",
      description:
        "Constantly developing new skills and exploring emerging technologies."
    }
  ];

  return (
    <div className="about-page">

      {/* PAGE HERO */}
      <section className="about-hero">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">GET TO KNOW ME</p>

          <h1>
            About <span>Me.</span>
          </h1>

          <p className="about-subtitle">
            A technology enthusiast, engineering student
            and aspiring AI professional.
          </p>
        </motion.div>

      </section>

      {/* INTRODUCTION */}
      <section className="about-intro">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/raashid-ai-portrait.png"
            alt="Mohammad Raashid KY"
          />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="section-label">WHO I AM</p>

          <h2>
            Hello, I'm Mohammad Raashid KY.
          </h2>

          <p>
            I'm an Artificial Intelligence and Machine Learning
            engineering student at PA College of Engineering,
            passionate about technology, programming and innovation.
          </p>

          <p>
            My technical journey involves exploring programming
            languages such as Python, Java and C, while developing
            an understanding of machine learning, software
            development and modern AI technologies.
          </p>

          <p>
            I enjoy working on practical projects, participating
            in technical activities and continuously improving
            my problem-solving abilities.
          </p>

          <p>
            My goal is to become a skilled AI professional and
            contribute to building intelligent solutions that
            create a meaningful real-world impact.
          </p>

          <a
            href="https://github.com/raashid-chanu"
            target="_blank"
            rel="noopener noreferrer"
            className="about-github-btn"
          >
            Explore My GitHub
            <ArrowUpRight size={18} />
          </a>

        </motion.div>

      </section>

      {/* EDUCATION */}
      <section className="education-section">

        <div className="about-heading">
          <p className="section-label">ACADEMIC BACKGROUND</p>
          <h2>My Education</h2>
        </div>

        <div className="education-card">

          <div className="education-icon">
            <GraduationCap size={30} />
          </div>

          <div>
            <h3>
              Bachelor of Engineering
            </h3>

            <h4>
              Artificial Intelligence & Machine Learning
            </h4>

            <p>
              PA College of Engineering
            </p>

            <span>
              Undergraduate Engineering
            </span>
          </div>

        </div>

      </section>

      {/* INTERESTS */}
      <section className="interests-section">

        <div className="about-heading">
          <p className="section-label">WHAT DRIVES ME</p>
          <h2>My Interests</h2>

          <p>
            Areas I'm passionate about exploring and developing.
          </p>
        </div>

        <div className="interest-grid">

          {interests.map((item, index) => (

            <motion.div
              className="interest-card"
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >

              <div className="interest-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CAREER GOAL */}
      <section className="career-section">

        <div className="career-card">

          <Target size={35} />

          <p className="section-label">MY VISION</p>

          <h2>
            Learning Today.
            <span> Innovating Tomorrow.</span>
          </h2>

          <p>
            I believe in continuous learning, practical experience
            and using technology to solve real-world challenges.
            I'm working towards building a strong career in
            Artificial Intelligence and Software Development.
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;