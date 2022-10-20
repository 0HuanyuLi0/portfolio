import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from "./components/NavBar";
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const handleMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>

      <NavBar mode={handleMode} />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

// dark:bg-slate-800 dark:text-slate-300