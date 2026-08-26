import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { certificates, education } from "../data/portfolio";
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

function CertificateLightbox({ image, alt, title, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="lightbox"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} - Full size`}
        >
          <motion.div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button
              className="lightbox-close"
              onClick={onClose}
              aria-label="Close certificate preview"
            >
              ×
            </button>
            <img src={image} alt={alt} className="lightbox-image" />
            <p className="lightbox-caption">{title}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Education() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.08 });
  const [activeCert, setActiveCert] = useState(null);

  const openCert = (cert) => {
    setActiveCert(cert);
    document.body.style.overflow = "hidden";
  };
  const closeCert = () => {
    setActiveCert(null);
    document.body.style.overflow = "";
  };

  return (
    <motion.section
      ref={ref}
      id="education"
      className="section education-section"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainer}
      aria-labelledby="education-heading"
    >
      <div className="container">
        <motion.div variants={fadeInUp} className="section-header">
          <span className="section-kicker">🎓 My Journey</span>
          <h2 id="education-heading" className="section-title">
            Education &amp; Certificates
          </h2>
          <p className="section-subtitle">
            The milestones that shaped my technical foundation and career path.
          </p>
        </motion.div>

        <motion.div
          className="education-timeline"
          variants={staggerContainer}
          role="list"
        >
          <div className="timeline-line" aria-hidden="true" />
          {education.map((item, i) => (
            <motion.article
              key={item.id}
              className={`timeline-item ${i % 2 === 0 ? "timeline-item--left" : "timeline-item--right"}`}
              variants={fadeInUp}
              role="listitem"
            >
              <div className="timeline-dot" aria-hidden="true" />
              <div className="education-card">
                <div className="education-card-header">
                  <div className="education-icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <span className={`status-badge ${item.status}`}>
                    {item.status === "completed" ? "✓ Completed" : "⏳ In Progress"}
                  </span>
                </div>
                <h3>{item.degree}</h3>
                <p className="institution">{item.institution}</p>
                <p className="status">{item.period}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.h3 variants={fadeInUp} className="subsection-title">
          Other Certificates
        </motion.h3>

        <motion.div
          className="certificates-grid"
          variants={staggerContainer}
          role="list"
        >
          {certificates.map((cert) => (
            <motion.article
              key={cert.id}
              className="certificate-card"
              variants={fadeInUp}
              role="listitem"
            >
              <button
                type="button"
                className="certificate-image-wrapper"
                onClick={() => openCert(cert)}
                aria-label={`View ${cert.title} certificate full size`}
              >
                <div className="certificate-image">
                  <img src={cert.image} alt={cert.alt} loading="lazy" />
                  <div className="certificate-overlay">
                    <span className="zoom-icon" aria-hidden="true">🔍</span>
                  </div>
                </div>
              </button>
              <div className="certificate-info">
                <div className="certificate-meta">
                  <span className="cert-date">{cert.date}</span>
                </div>
                <p className="cert-title">{cert.title}</p>
                <p className="cert-desc">{cert.description}</p>
                <p className="cert-inst">{cert.institution}</p>
                <div className="certificate-actions">
                  <a
                    href={cert.image}
                    download={cert.downloadName}
                    className="cert-download"
                  >
                    ⬇ Download
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <CertificateLightbox
        image={activeCert?.image}
        alt={activeCert?.alt}
        title={activeCert?.title}
        onClose={closeCert}
      />
    </motion.section>
  );
}
