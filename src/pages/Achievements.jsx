import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Lightbulb,
  BrainCircuit,
  Users,
  Award,
  CalendarDays,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const achievements = [
  {
    title: "ET AI Hackathon 2.0",
    organization: "The Economic Times",
    year: "2026",
    category: "National Level Hackathon",
    description:
      "Participated in ET AI Hackathon 2.0, competing among AI builders and developing innovative solutions using Generative AI.",
    icon: Trophy,
    featured: true,
  },
  {
    title: "Fusion Techathon 4.0",
    organization: "Alva's Institute of Engineering & Technology",
    year: "2026",
    category: "24-Hour National Hackathon",
    description:
      "Participated in a 24-hour national-level hackathon, demonstrating teamwork, innovation and problem-solving skills.",
    icon: Lightbulb,
  },
  {
    title: "Technical Achiever",
    organization: "Department of AI & ML",
    year: "2026",
    category: "Academic Recognition",
    description:
      "Recognized as a technical achiever in the department for technical involvement and continuous learning.",
    icon: Medal,
  },
  {
    title: "Signal Processing with AI using Python",
    organization: "PA College of Engineering & Abeyaantrix",
    year: "2025",
    category: "Technical Workshop",
    description:
      "Successfully completed a five-day hands-on add-on course exploring signal processing concepts and their applications using Artificial Intelligence and Python.",
    icon: BrainCircuit,
  },
  {
    title: "One Million Prompters",
    organization: "Dubai Future Foundation",
    year: "2026",
    category: "AI Initiative",
    description:
      "Successfully completed the One Million Prompters initiative, developing knowledge and skills in AI prompt engineering.",
    icon: Sparkles,
  },
  {
    title: "AI Learning & Innovation",
    organization: "Continuous Technical Development",
    year: "2026",
    category: "Personal Development",
    description:
      "Continuously developing practical skills in Artificial Intelligence, Machine Learning, programming and emerging technologies through hands-on projects and learning.",
    icon: Award,
  },
];

function Achievements() {
  return (
    <section className="achievements-page">

      {/* HEADER */}

      <motion.div
        className="achievements-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">
          MILESTONES & RECOGNITION
        </span>

        <h1>
          My <span>Achievements.</span>
        </h1>

        <p>
          Every milestone represents dedication, curiosity and
          continuous growth. Here are some of the achievements
          and experiences that have shaped my technical journey.
        </p>
      </motion.div>

      {/* STATISTICS */}

      <motion.div
        className="achievement-stats"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="achievement-stat">
          <Trophy />
          <h2>06</h2>
          <p>Key Milestones</p>
        </div>

        <div className="achievement-stat">
          <Users />
          <h2>02</h2>
          <p>Hackathon Participations</p>
        </div>

        <div className="achievement-stat">
          <CalendarDays />
          <h2>2025–26</h2>
          <p>Achievement Period</p>
        </div>
      </motion.div>

      {/* ACHIEVEMENT CARDS */}

      <div className="achievements-grid">

        {achievements.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              className={`achievement-card ${
                item.featured ? "featured-achievement" : ""
              }`}
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
            >

              <div className="achievement-card-top">

                <div className="achievement-icon">
                  <Icon size={27} />
                </div>

                <span className="achievement-year">
                  {item.year}
                </span>

              </div>

              <span className="achievement-category">
                {item.category}
              </span>

              <h3>{item.title}</h3>

              <h4>{item.organization}</h4>

              <p>{item.description}</p>

              <div className="achievement-card-bottom">
                <span>
                  <Award size={15} />
                  Achievement
                </span>

                <ArrowUpRight size={19} />
              </div>

            </motion.div>
          );
        })}

      </div>

      {/* CLOSING SECTION */}

      <motion.div
        className="achievement-quote"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Sparkles size={27} />

        <h2>
          Learning. Building. <span>Achieving.</span>
        </h2>

        <p>
          Every experience is an opportunity to learn something
          new, solve meaningful problems and move closer to
          becoming a skilled AI professional.
        </p>
      </motion.div>

    </section>
  );
}

export default Achievements;