import { motion } from "framer-motion";

import {
  Mail,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Users,
  MessageCircle,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const contactLinks = [
    {
      title: "GitHub",
      description: "Explore my projects and code.",
      icon: <FaGithub size={23} />,
      link: "https://github.com/raashid-chanu",
      label: "Visit GitHub",
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally.",
      icon: <FaLinkedin size={23} />,
      link: "https://www.linkedin.com/in/mohammad-raashid-ky-b91913394/",
      label: "Connect on LinkedIn",
    },
    {
      title: "Email",
      description: "Contact me for opportunities and collaborations.",
      icon: <Mail size={23} />,
      link: "mailto:mraashidky@gmail.com",
      label: "Send an Email",
    },
  ];

  const opportunities = [
    {
      icon: <BriefcaseBusiness size={23} />,
      title: "Internship Opportunities",
      description:
        "Open to internships where I can apply my technical knowledge, gain industry experience, and contribute to meaningful projects.",
    },
    {
      icon: <Code2 size={23} />,
      title: "Project Collaborations",
      description:
        "Interested in collaborating on AI, machine learning, web development, and innovative technology projects.",
    },
    {
      icon: <Users size={23} />,
      title: "Networking",
      description:
        "Always interested in connecting with developers, students, mentors, and technology enthusiasts.",
    },
  ];

  return (
    <section className="contact-page">
      <div className="contact-container">

        {/* Heading */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">LET'S CONNECT</p>

          <h1>
            Get In <span>Touch</span>
          </h1>

          <p className="contact-intro">
            Have an opportunity, project idea, or just want to connect?
            I'd love to hear from you. Let's create something meaningful
            together.
          </p>
        </motion.div>

        {/* Main Contact Section */}
        <div className="contact-content">

          <motion.div
            className="contact-main-card"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="contact-icon">
              <MessageCircle size={30} />
            </div>

            <h2>Let's Start a Conversation</h2>

            <p>
              I'm currently open to learning opportunities, internships,
              technical collaborations, and connecting with people who
              share an interest in technology.
            </p>

            <div className="contact-status">
              <span className="status-dot"></span>
              Open to opportunities
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="contact-social-grid">
            {contactLinks.map((item, index) => (
              <motion.a
                href={item.link}
                target={item.title === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="contact-social-card"
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.15,
                }}
                whileHover={{ y: -7 }}
              >
                <div className="social-card-icon">
                  {item.icon}
                </div>

                <div>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span>
                    {item.label} <ArrowUpRight size={15} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Opportunities */}
        <motion.div
          className="opportunities-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="opportunities-heading">
            <p className="section-label">WHAT I'M LOOKING FOR</p>

            <h2>Ways We Can Connect</h2>
          </div>

          <div className="opportunities-grid">
            {opportunities.map((item) => (
              <motion.div
                className="opportunity-card"
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="opportunity-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Mail size={20} />

          <p>
            Have something interesting in mind? Let's connect!
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;