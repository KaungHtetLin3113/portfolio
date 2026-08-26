import "./App.css";
import useDarkMode from "./hooks/useDarkMode";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Education from "./components/Education";
import { TechnicalSkills, PersonalSkills } from "./components/Skills";
import Projects from "./components/Projects";
import Contact, { Footer } from "./components/Contact";

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className={`portfolio ${isDarkMode ? "dark-mode" : ""}`}>
      <a href="#home" className="skip-link">
        Skip to main content
      </a>

      <ScrollProgress />

      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />

      <main id="main">
        <Hero />
        <Stats />
        <Education />
        <TechnicalSkills />
        <PersonalSkills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
