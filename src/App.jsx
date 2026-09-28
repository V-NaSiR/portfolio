import { useState, useEffect } from "react";

import "./App.css";
import "./utils/icon.js";

import AnimationBox from "./components/Header/AnimationBox";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Specifications from "./components/Specifications.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Footer from "./components/Footer.jsx";
import BackToTopButton from "./components/BackToTopButton.jsx";
import Spinner from "./components/Effects/Spinner.jsx";
import Experience from "./components/Experience.jsx";

import blackBoardImage from "./assets/images/black-board.jpg";
import ballImage from "./assets/images/brown-ball.webp";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();

        img.onload = resolve;
        img.onerror = resolve;

        img.src = src;
      });

    const waitForWindowLoad = () =>
      new Promise((resolve) => {
        if (document.readyState === "complete") {
          resolve();
        } else {
          window.addEventListener("load", resolve, { once: true });
        }
      });

    const loadApp = async () => {
      await Promise.all([
        waitForWindowLoad(),
        preloadImage(blackBoardImage),
        preloadImage(ballImage),
      ]);

      setIsLoading(false);
    };

    loadApp();
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
