import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Typing effect
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullName = "Kaung Htet Lin";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedText(fullName.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100); // Speed of typing (100ms per character)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className={`portfolio ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Navigation */}
      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nav-container">
          <div className="nav-logo">Kaung Htet Lin</div>
          <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="hamburger"></span>
          </button>
          <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a></li>
            <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="hero-section"
        style={{ y: y1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-content">
          <motion.div
            className="hero-text-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="hero-name">
              {displayedText}
              {isTyping && <span className="cursor">|</span>}
            </h1>
            <motion.h2
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Full Stack Developer <span className="age">(22)</span>
            </motion.h2>
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Passionate and self-motivated Full Stack Developer with a strong interest in PHP and JavaScript development. Skilled in building web applications and familiar with SDLC, database management, backend development concepts, and frontend development. Eager to continuously improve technical skills, solve real-world problems, and grow as a professional developer.
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a href="/resume.pdf" download="Kaung_Htet_Lin_CV" className="btn-primary">Download CV</a>
              <div className="social-links">
                <a href="https://github.com/KaungHtetLin3113" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="hero-image-container">
              <img src="/profile.jpg" alt="Kaung Htet Lin" className="hero-image" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        id="education"
        className="section education-section"
        style={{ y: y2 }}
        initial="hidden"
        animate={isVisible.education ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp} className="section-title">
            Education & Certificates
          </motion.h2>
          <motion.div className="education-grid" variants={staggerContainer}>
            <motion.div className="education-card" variants={fadeInUp}>
              <div className="education-icon">🎓</div>
              <h3>Level 5 Diploma in Computing</h3>
              <p className="institution">KMD College - NCC Education UK</p>
              <p className="status">March 2025 - February 2026</p>
            </motion.div>
            <motion.div className="education-card" variants={fadeInUp}>
              <div className="education-icon">🎓</div>
              <h3>Level 4 Diploma in Computing</h3>
              <p className="institution">KMD College - NCC Education UK</p>
              <p className="status">March 2024 - January 2025</p>
            </motion.div>
            <motion.div className="education-card" variants={fadeInUp}>
              <div className="education-icon">💻</div>
              <h3>Diploma in Web Development</h3>
              <p className="institution">Yangon University Of Distance Education</p>
              <p className="status">April 2023 - March 2024</p>
            </motion.div>
            <motion.div className="education-card" variants={fadeInUp}>
              <div className="education-icon">🔬</div>
              <h3>BSc Chemistry</h3>
              <p className="institution">Dagon University</p>
              <p className="status">3rd Year - Ongoing</p>
            </motion.div>
          </motion.div>

          <motion.h3 variants={fadeInUp} className="subsection-title">
            Other Certificates
          </motion.h3>
          <motion.div className="certificates-grid" variants={staggerContainer}>
            <motion.div className="certificate-card" variants={fadeInUp}>
              <div className="certificate-image">
                <img src="/certificate1.jpg" alt="Professional Web Developer Certificate" />
              </div>
              <div className="certificate-info">
                <p className="cert-title">Professional Web Developer</p>
                <p className="cert-desc">Javascript, Bootstrap, PHP, Laravel</p>
                <p className="cert-inst">Fairway Technology</p>
                <a href="/certificate1.jpg" download="Professional_Web_Developer_Certificate" className="cert-download">
                  Download Certificate ↓
                </a>
              </div>
            </motion.div>
            <motion.div className="certificate-card" variants={fadeInUp}>
              <div className="certificate-image">
                <img src="/certificate2.jpg" alt="Programming Basic Certificate" />
              </div>
              <div className="certificate-info">
                <p className="cert-title">Programming Basic</p>
                <p className="cert-desc">JAVA</p>
                <p className="cert-inst">Fairway Technology</p>
                <a href="/certificate2.jpg" download="Programming_Basic_Certificate" className="cert-download">
                  Download Certificate ↓
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Technical Skills */}
      <motion.section
        id="skills"
        className="section skills-section"
        initial="hidden"
        animate={isVisible.skills ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp} className="section-title">
            Technical Skills
          </motion.h2>
          <motion.div className="skills-grid" variants={staggerContainer}>
            <motion.div className="skill-category" variants={fadeInUp}>
              <h3>Languages</h3>
              <div className="skill-tags">
                {["PHP", "JavaScript"].map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div className="skill-category" variants={fadeInUp}>
              <h3>Frontend</h3>
              <div className="skill-tags">
                {["HTML", "CSS", "Bootstrap", "Blade", "JavaScript"].map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div className="skill-category" variants={fadeInUp}>
              <h3>Backend</h3>
              <div className="skill-tags">
                {["PHP", "Laravel", "REST API (Basic)"].map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div className="skill-category" variants={fadeInUp}>
              <h3>Database</h3>
              <div className="skill-tags">
                {["MySQL", "SQL"].map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div className="skill-category" variants={fadeInUp}>
              <h3>Tools</h3>
              <div className="skill-tags">
                {["XAMPP", "Git & GitHub", "AI Agent"].map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div className="skill-category" variants={fadeInUp}>
              <h3>Learning</h3>
              <div className="skill-tags">
                {["Laravel", "API Development", "React"].map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag learning"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Personal Skills */}
      <motion.section
        id="personal-skills"
        className="section personal-skills-section"
        initial="hidden"
        animate={isVisible["personal-skills"] ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp} className="section-title">
            Personal Skills
          </motion.h2>
          <motion.div className="personal-skills-grid" variants={staggerContainer}>
            {[
              "Fast Learner",
              "Good Teamwork & Communication",
              "Problem-Solving Skills",
              "Strong Passion for Backend Development",
              "Self-Learning Ability",
              "English Intermediate",
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="personal-skill-item"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <span className="skill-check">✓</span>
                <p>{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        className="section projects-section"
        initial="hidden"
        animate={isVisible.projects ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp} className="section-title">
            Projects
          </motion.h2>
          <motion.div className="projects-grid" variants={staggerContainer}>
            <motion.div className="project-card" variants={fadeInUp}>
              <div className="project-header">
                <h3>POS System (SME Business)</h3>
                <div className="project-tech">
                  {["Laravel", "Bootstrap", "MySQL"].map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="project-description">
                Developed a complete Point of Sale system for small business use.
                Includes product management (add, edit, delete, stock control),
                sales transaction handling, invoice generation, and inventory
                tracking. Built with a simple and user-friendly interface for
                daily business operations.
              </p>
              <a href="https://github.com/KaungHtetLin3113" target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            </motion.div>

            <motion.div className="project-card" variants={fadeInUp}>
              <div className="project-header">
                <h3>AuraMed Hospital Management System</h3>
                <div className="project-tech">
                  {["Pure PHP", "MySQL", "JavaScript"].map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="project-description">
                Developed patient record management system with comprehensive
                features including doctor information management, appointment
                scheduling, and payment processing. Implemented health package
                management features with structured backend logic.
              </p>
              <a href="https://github.com/KaungHtetLin3113" target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            </motion.div>

            <motion.div className="project-card" variants={fadeInUp}>
              <div className="project-header">
                <h3>FoodFusion Recipe Website</h3>
                <div className="project-tech">
                  {["Pure PHP", "MySQL", "JavaScript"].map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="project-description">
                Developed recipe management platform with community cookbook
                feature. Implemented favorite/save functionality and print
                recipes feature. Designed responsive and modern UI for better
                user experience.
              </p>
              <a href="https://github.com/KaungHtetLin3113" target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            </motion.div>

            <motion.div className="project-card" variants={fadeInUp}>
              <div className="project-header">
                <h3>Standing Desk Website</h3>
                <div className="project-tech">
                  {["HTML", "CSS", "JavaScript"].map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="project-description">
                Built responsive product website for standing desk products using
                HTML & CSS. Focused on clean UI design and optimal user
                experience with modern layout and smooth interactions.
              </p>
              <a href="https://github.com/KaungHtetLin3113" target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="section contact-section"
        initial="hidden"
        animate={isVisible.contact ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp} className="section-title">
            Let's Connect
          </motion.h2>
          <motion.div className="contact-content" variants={fadeInUp}>
            <div className="contact-cards">
              <motion.a
                href="tel:09-768608545"
                className="contact-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" /></svg>
                </div>
                <div className="contact-card-info">
                  <h4>Phone</h4>
                  <p>09-768608545 / 09-5085574</p>
                </div>
              </motion.a>
              <motion.a
                href="mailto:kaunghttln3113@gmail.com"
                className="contact-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                </div>
                <div className="contact-card-info">
                  <h4>Email</h4>
                  <p>kaunghttln3113@gmail.com</p>
                </div>
              </motion.a>
              <motion.a
                href="https://github.com/KaungHtetLin3113"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </div>
                <div className="contact-card-info">
                  <h4>GitHub</h4>
                  <p>github.com/KaungHtetLin3113</p>
                </div>
              </motion.a>
              <motion.div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                </div>
                <div className="contact-card-info">
                  <h4>Location</h4>
                  <p>Tamwe, Yangon, Myanmar</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Kaung Htet Lin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;