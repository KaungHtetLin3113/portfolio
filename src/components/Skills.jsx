import { motion } from "framer-motion";
import { personalSkills, skillCategories } from "../data/portfolio";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export function TechnicalSkills() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="section skills-section"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainer}
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <motion.div variants={fadeInUp} className="section-header">
          <span className="section-kicker">⚙️ What I Use</span>
          <h2 id="skills-heading" className="section-title">
            Technical Skills
          </h2>
          <p className="section-subtitle">
            Technologies and tools I&apos;ve been building with.</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          role="list"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              className="skill-category"
              variants={fadeInUp}
              role="listitem"
            >
              <div className="skill-category-header">
                <span className="skill-category-icon" aria-hidden="true">
                  {category.icon}
                </span>
                <h3>{category.title}</h3>
              </div>

              {category.id === "tools" || category.id === "learning" ? (
                <ul className="skill-tags">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="skill-tag">
                      {skill.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="skill-bars">
                  {category.skills.map((skill, idx) => (
                    <div key={skill.name} className="skill-bar-row">
                      <div className="skill-bar-label">
                        <span>{skill.name}</span>
                        <span className="skill-bar-percent">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-track" aria-hidden="true">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.1, delay: 0.2 + idx * 0.08, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function PersonalSkills() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      id="personal-skills"
      className="section personal-skills-section"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainer}
      aria-labelledby="personal-skills-heading"
    >
      <div className="container">
        <motion.div variants={fadeInUp} className="section-header">
          <span className="section-kicker">✨ Soft Skills</span>
          <h2 id="personal-skills-heading" className="section-title">
            Personal Strengths
          </h2>
          <p className="section-subtitle">
            The traits that help me work effectively with teams and problems.</p>
        </motion.div>

        <motion.div
          className="personal-skills-grid"
          variants={staggerContainer}
          role="list"
        >
          {personalSkills.map((skill) => (
            <motion.div
              key={skill.id}
              className="personal-skill-item"
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -4 }}
              role="listitem"
            >
              <span className="skill-check" aria-hidden="true">
                {skill.icon}
              </span>
              <p>{skill.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
