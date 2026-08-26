import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Icon from "./Icon";

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

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.08 });

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="section projects-section"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainer}
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <motion.div variants={fadeInUp} className="section-header">
          <span className="section-kicker">🚀 Featured Work</span>
          <h2 id="projects-heading" className="section-title">
            Projects
          </h2>
          <p className="section-subtitle">
            A selection of projects I&apos;ve built from start to finish.
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={staggerContainer}
          role="list"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className={`project-card ${project.featured ? "project-card--featured" : ""}`}
              variants={fadeInUp}
              role="listitem"
            >
              <div className="project-card-inner">
                <div className="project-cover" aria-hidden="true">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.alt || project.name}
                      className="project-cover-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  )}
                  <span className="project-cover-number">
                    {String(project.id).padStart(2, "0")}
                  </span>
                  <span className="project-cover-glow" />
                  <span className="project-cover-mark">{project.featured ? "⭐" : "🚀"}</span>
                  {project.featured && (
                    <span className="featured-badge">⭐ Featured</span>
                  )}
                </div>

                <div className="project-body">
                  <header className="project-header">
                    <h3>{project.name}</h3>
                    <ul className="project-tech" aria-label="Technologies used">
                      {project.tech.map((tech) => (
                        <li key={tech} className="tech-tag">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </header>

                  <p className="project-description">{project.description}</p>

                  {project.highlights?.length > 0 && (
                    <ul className="project-highlights">
                      {project.highlights.map((h) => (
                        <li key={h} className="highlight-item">
                          <span aria-hidden="true">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <footer className="project-footer">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link--github"
                        aria-label={`${project.name} source code on GitHub (opens in new tab)`}
                      >
                        <Icon name="github" size={16} />
                        <span>Source</span>
                      </a>
                    )}

                  {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link--demo"
                        aria-label={`${project.name} live demo (opens in new tab)`}
                      >
                        <span aria-hidden="true">🔗</span>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </footer>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
