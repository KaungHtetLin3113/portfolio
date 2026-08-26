import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { navLinks, personal } from "../data/portfolio";
import useActiveSection from "../hooks/useActiveSection";
import useOnClickOutside from "../hooks/useOnClickOutside";

const NAVBAR_ID = "portfolio-navbar";
const MOBILE_MENU_ID = "portfolio-mobile-menu";

export default function Navbar({
  isDarkMode,
  onToggleDarkMode,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const activeSection = useActiveSection(navLinks.map((l) => l.id), 150);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useOnClickOutside(menuRef, () => setIsMobileMenuOpen(false));

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((p) => !p);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav
      id={NAVBAR_ID}
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      aria-label="Main navigation"
      ref={menuRef}
    >
      <div className={`nav-container ${isScrolled ? "nav-container--tight" : ""}`}>
        <a
          href="#home"
          className="nav-logo"
          onClick={closeMobileMenu}
          aria-label={`${personal.name} - Go to top`}
        >
          <span className="nav-logo-mark">K</span>
          <span className="nav-logo-text">{personal.name}</span>
        </a>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleDarkMode}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDarkMode}
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span aria-hidden="true">{isDarkMode ? "☀️" : "🌙"}</span>
          </button>

          <button
            type="button"
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "is-open" : ""}`}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="hamburger" aria-hidden="true"></span>
          </button>
        </div>

        <ul
          id={MOBILE_MENU_ID}
          className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}
          role="menubar"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} role="none">
                <a
                  href={`#${link.id}`}
                  role="menuitem"
                  onClick={closeMobileMenu}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  className={isActive ? "is-active" : ""}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {isMobileMenuOpen && (
        <div
          className="nav-backdrop"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </motion.nav>
  );
}
