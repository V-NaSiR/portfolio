import "./App.css";
import AnimationBox from "./components/Header/AnimationBox";
import "./utils/icon.js";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Specifications from "./components/Specifications.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Footer from "./components/Footer.jsx";
import BackToTopButton from "./components/BackToTopButton.jsx";
import { useState, useEffect } from "react";
import Spinner from "./components/Effects/Spinner.jsx";
import Experience from "./components/Experience.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="App">
      <AnimationBox />

      <AboutMe />

      <Skills />

      <Projects />

      <Experience />

      <Specifications />

      <Footer />

      <BackToTopButton />
    </div>
  );
};

export default App;
