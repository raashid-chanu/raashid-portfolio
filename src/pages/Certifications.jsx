import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Award,
  ExternalLink,
  X,
  Calendar,
  GraduationCap,
  Download,
  Eye,
  Sparkles,
} from "lucide-react";

const certificates = [
  {
    title: "Generative AI for Computer Vision",
    organization: "NPTEL – IIT Guwahati",
    year: "2026",
    score: "87%",
    image: "/certificates/nptel-generative-ai-computer-vision.png",
    category: "Artificial Intelligence",
  },
  {
    title: "Yuva AI for All",
    organization: "NASSCOM FutureSkills Prime",
    year: "2026",
    image: "/certificates/yuva-ai-for-all.png",
    category: "Artificial Intelligence",
  },
  {
    title: "ET AI Hackathon 2.0",
    organization: "The Economic Times",
    year: "2026",
    image: "/certificates/et-ai-hackathon-2.png",
    category: "Hackathon",
  },
  {
    title: "One Million Prompters",
    organization: "Dubai Future Foundation",
    year: "2026",
    image: "/certificates/one-million-prompters.png",
    category: "Prompt Engineering",
  },
  {
    title: "Fusion Techathon 4.0",
    organization: "Alva's Institute of Engineering & Technology",
    year: "2026",
    image: "/certificates/fusion-techathon-4.png",
    category: "Hackathon",
  },
  {
    title: "Signal Processing with AI using Python",
    organization: "PA College & Abeyaantrix",
    year: "2025",
    image: "/certificates/signal-processing-ai-python.png",
    category: "Artificial Intelligence",
  },
  {
    title: "AutoCAD",
    organization: "TIME Training Center",
    year: "2024",
    image: "/certificates/autocad-time-training-center.png",
    category: "Technical Skills",
  },
  {
    title: "Autodesk AutoCAD 2024",
    organization: "Autodesk Authorized Training Center",
    year: "2024",
    image: "/certificates/autodesk-autocad-2024.png",
    category: "Technical Skills",
  },
  {
    title: "Certified Accountant Analytical Test",
    organization: "IICA Global",
    year: "2024",
    image: "/certificates/iica-certified-accountant.png",
    category: "Professional Certification",
  },
];

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section className="certifications-page">

      {/* HEADER */}

      <motion.div
        className="certifications-header"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">
          MY ACHIEVEMENTS
        </span>

        <h1>
          Certifications &
          <span> Credentials.</span>
        </h1>

        <p>
          A collection of certifications, technical training,
          professional learning and achievements that represent
          my journey in Artificial Intelligence and Technology.
        </p>

        <div className="certificate-stats">

          <div className="stat-item">
            <Award size={27} />
            <h2>09</h2>
            <span>Certificates</span>
          </div>

          <div className="stat-item">
            <GraduationCap size={27} />
            <h2>03</h2>
            <span>Years of Learning</span>
          </div>

          <div className="stat-item">
            <Calendar size={27} />
            <h2>2024–26</h2>
            <span>Achievement Period</span>
          </div>

        </div>
      </motion.div>

      {/* CERTIFICATE GRID */}

      <div className="certificates-grid">

        {certificates.map((certificate, index) => (

          <motion.div
            className="certificate-card"
            key={certificate.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: (index % 3) * 0.1,
            }}
            whileHover={{ y: -8 }}
          >

            {/* IMAGE */}

            <div className="certificate-image">

              <img
                src={certificate.image}
                alt={certificate.title}
                loading="lazy"
              />

              <div className="certificate-overlay">

                <button
                  onClick={() => setSelectedCertificate(certificate)}
                >
                  <Eye size={18} />
                  View Certificate
                </button>

              </div>

            </div>

            {/* DETAILS */}

            <div className="certificate-info">

              <span className="certificate-category">
                {certificate.category}
              </span>

              <h3>{certificate.title}</h3>

              <p>{certificate.organization}</p>

              {certificate.score && (
                <div className="certificate-score">
                  <Sparkles size={15} />
                  Score: {certificate.score}
                </div>
              )}

              <div className="certificate-bottom">

                <span>
                  <Calendar size={15} />
                  {certificate.year}
                </span>

                <button
                  onClick={() => setSelectedCertificate(certificate)}
                  aria-label={`View ${certificate.title}`}
                >
                  <ExternalLink size={19} />
                </button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

      {/* MODAL */}

      <AnimatePresence>

        {selectedCertificate && (

          <motion.div
            className="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >

            <motion.div
              className="certificate-modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >

              <button
                className="modal-close"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close preview"
              >
                <X size={24} />
              </button>

              <div className="modal-heading">

                <span className="certificate-category">
                  {selectedCertificate.category}
                </span>

                <h2>{selectedCertificate.title}</h2>

                <p>{selectedCertificate.organization}</p>

              </div>

              <div className="modal-image-wrapper">

                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                />

              </div>

              <div className="modal-actions">

                <a
                  href={selectedCertificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn"
                >
                  <Eye size={17} />
                  View Full Size
                </a>

                <a
                  href={selectedCertificate.image}
                  download
                  className="download-btn"
                >
                  <Download size={17} />
                  Download Certificate
                </a>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}

export default Certifications;