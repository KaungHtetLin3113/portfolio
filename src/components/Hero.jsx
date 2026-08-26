import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personal, rotatingRoles, socials } from "../data/portfolio";
import Icon from "./Icon";

function RoleRotator() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    if (phase !== "typing") return;
    const target = rotatingRoles[index];
    if (displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase("deleting"), 1800);
    return () => clearTimeout(t);
  }, [displayed, phase, index]);

  useEffect(() => {
    if (phase !== "deleting") return;
    if (displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      return () => clearTimeout(t);
    }
    setIndex((prev) => (prev + 1) % rotatingRoles.length);
    setPhase("typing");
  }, [displayed, phase]);

  return (
    <span className="role-rotator" aria-live="polite">
      {displayed}
      <span className="role-cursor" aria-hidden="true">_</span>
    </span>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, -120]);
  const yContent = useTransform(scrollY, [0, 800], [0, -60]);

  const [displayedName, setDisplayedName] = useState("");
  const [isTypingName, setIsTypingName] = useState(true);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < personal.name.length) {
        setDisplayedName(personal.name.slice(0, i + 1));
        i++;
      } else {
        setIsTypingName(false);
        clearInterval(id);
      }
    }, personal.typingSpeed);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.section
      id="home"
      className="hero-section section"
      style={{ y: yBg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      aria-labelledby="hero-heading"
    >
      <div className="hero-background" aria-hidden="true">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-content" style={{ y: yContent }}>
        <motion.div
          className="hero-text-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="hero-greeting">👋 Hello, I&apos;m</p>

          <h1 id="hero-heading" className="hero-name">
            {displayedName}
            {isTypingName && <span className="cursor" aria-hidden="true">|</span>}
          </h1>

          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <RoleRotator /> <span className="age">({personal.age})</span>
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {personal.description}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <a
              href={personal.resumePath}
              download={personal.resumeFileName}
              className="btn-primary"
            >
              ⬇ Download CV
            </a>

          </motion.div>
          <br />
          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.1 }}
          >
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target={s.id === "github" || s.id === "location" ? "_blank" : undefined}
                rel={s.id === "github" || s.id === "location" ? "noopener noreferrer" : undefined}
                className="social-icon"
                aria-label={s.name}
                title={s.name}
              >
                <Icon name={s.icon} size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero-image-container">
            <div className="hero-image-ring ring-1"></div>
            <div className="hero-image-ring ring-2"></div>
            <img
              src={personal.profileImage}
              alt={personal.name}
              className="hero-image"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>

      <a href="#stats" className="scroll-down" aria-label="Scroll to highlights section">
        <span className="scroll-down-text">Scroll</span>
        <span className="scroll-down-arrow" aria-hidden="true">↓</span>
      </a>
    </motion.section>
  );
}
