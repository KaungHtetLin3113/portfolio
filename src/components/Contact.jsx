import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { contact, personal, socials } from "../data/portfolio";
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

function useCopyToClipboard(resetAfter = 2500) {
  const [copiedId, setCopiedId] = useState(null);

  const copy = async (id, value) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        // Fallback for older browsers / non-secure contexts.
        const el = document.createElement("textarea");
        el.value = value;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
      setCopiedId(id);
      setTimeout(() => setCopiedId((cur) => (cur === id ? null : cur)), resetAfter);
    } catch {
      setCopiedId(null);
    }
  };

  return [copiedId, copy];
}

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver();
  const [copiedId, copy] = useCopyToClipboard();

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="section contact-section"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainer}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <motion.div variants={fadeInUp} className="section-header">
          <span className="section-kicker">📬 Get In Touch</span>
          <h2 id="contact-heading" className="section-title">
            Let&apos;s Connect
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Drop me a message.
          </p>
        </motion.div>

        <motion.div className="contact-content" variants={fadeInUp}>
          <motion.div className="contact-cards" variants={staggerContainer} role="list">
            {contact.map((item) => (
              <motion.div
                key={item.id}
                className="contact-card"
                variants={fadeInUp}
                role="listitem"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
              >
                <a
                  className="contact-card-link"
                  href={item.href}
                  target={item.id === "github" || item.id === "location" ? "_blank" : undefined}
                  rel={item.id === "github" || item.id === "location" ? "noopener noreferrer" : undefined}
                  aria-label={
                    item.id === "location"
                      ? `${item.title}: ${item.value} (opens in Google Maps)`
                      : `${item.title}: ${item.value}`
                  }
                >
                  <div className="contact-card-icon">
                    <Icon name={item.icon} size={28} />
                  </div>
                  <div className="contact-card-info">
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </a>

                <button
                  type="button"
                  className="contact-card-copy"
                  onClick={() => copy(item.id, item.copyValue)}
                  aria-label={`Copy ${item.title} (${item.value}) to clipboard`}
                  title={copiedId === item.id ? "Copied!" : `Copy ${item.title}`}
                >
                  <span aria-hidden="true">{copiedId === item.id ? "✓" : "⧉"}</span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="nav-logo-mark" aria-hidden="true">K</span>
            <div className="footer-brand-text">
              <p className="footer-name">{personal.name}</p>
              <p className="footer-tagline">{personal.title} &amp; lifelong learner</p>
            </div>
          </div>

          <ul className="footer-socials" aria-label="Social links">
            {socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.url}
                  target={s.id === "github" || s.id === "location" ? "_blank" : undefined}
                  rel={s.id === "github" || s.id === "location" ? "noopener noreferrer" : undefined}
                  className="footer-social"
                  aria-label={s.name}
                  title={s.name}
                >
                  <Icon name={s.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-divider" aria-hidden="true" />

        <div className="footer-bottom">
          <p className="footer-copy">© {year} {personal.name}. All rights reserved.</p>
          <button
            type="button"
            className={`back-to-top ${showTop ? "is-visible" : ""}`}
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}