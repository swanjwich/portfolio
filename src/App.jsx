import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

import Welcome from "./components/Welcome";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Navbar from "./components/Navbar";
import DarkMode from "./components/DarkMode";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const welcomeRef = useRef(null);
  const skillsRef = useRef(null);
  const isWelcomeInView = useInView(welcomeRef, { margin: "-50% 0px -50% 0px" });
  const isSkillsInView = useInView(skillsRef, { margin: "-20% 0px -20% 0px" });

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="overflow-x-hidden" >
      <div className="text-white">
        <Welcome sectionRef={welcomeRef} />
        <About />
        <Skills sectionRef={skillsRef} />
        <Projects />

        {!isWelcomeInView && (
          <>
            <SocialLinks />
            <Navbar isSkillsInView={isSkillsInView} />
            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
