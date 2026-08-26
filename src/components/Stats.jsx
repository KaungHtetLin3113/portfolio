import { motion } from "framer-motion";
import { stats } from "../data/portfolio";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import useCountUp from "../hooks/useCountUp";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

function StatCard({ stat, trigger }) {
  const count = useCountUp(stat.value, 1400, trigger);
  return (
    <motion.div className="stat-card" variants={fadeInUp} role="listitem">
      <div className="stat-value">
        {count}
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </motion.div>
  );
}

export default function Stats() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="stats"
      className="section stats-section"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainer}
      aria-labelledby="stats-heading"
    >
      <div className="container">
        <motion.div variants={fadeInUp} className="section-header">
          <span className="section-kicker">📊 At a Glance</span>
          <h2 id="stats-heading" className="section-title">
            Career Highlights
          </h2>
          <p className="section-subtitle">
            A quick snapshot of the milestones I&apos;ve reached on my learning journey.
          </p>
        </motion.div>

        <motion.div
          className="stats-grid"
          variants={staggerContainer}
          role="list"
        >
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} trigger={isVisible} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}