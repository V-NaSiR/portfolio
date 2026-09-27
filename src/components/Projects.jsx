import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Project from "./Project";
import styles from "./Project.module.css";
import FadeInSection from "./Effects/FadeInSection";
import { motion, AnimatePresence } from "framer-motion";

import { projectList } from "../utils/projects-data";

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredItems =
    selectedTab === "all"
      ? projectList
      : projectList.filter((i) => i.id === selectedTab);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      rtl: true,
      slides: {
        perView: 1,
        spacing: 10,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 20 },
        },
        "(min-width: 1200px)": {
          slides: { perView: 3, spacing: 30 },
        },
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    },
    [],
  );

  return (
    <Element name="project">
      <FadeInSection direction="farBottom">
        <section id="project" className="py-4">
          <div className="container">
            <h2 className="section-title mb-3">نمونه کار های من</h2>
            <ul className={`${styles.navPills} d-flex flex-wrap mb-4`}>
              <li>
                <button
                  className={selectedTab === "all" ? `${styles.active}` : ""}
                  onClick={() => {
                    setSelectedTab("all");
                    setCurrentSlide(0);
                  }}
                >
                  همه موارد
                </button>
              </li>
              {projectList.map((item) => (
                <li key={item.id}>
                  <button
                    className={
                      selectedTab === item.id ? `${styles.active}` : ""
                    }
                    onClick={() => {
                      setSelectedTab(item.id);
                      setCurrentSlide(0);
                    }}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>

            {/* slider */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab} // re render motion.div when tab change
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  ref={sliderRef}
                  className="keen-slider py-2"
                  key={selectedTab} // ⬅ reInit when tab change
                >
                  {filteredItems.map((item) =>
                    item.projects.map((project) => (
                      <Project
                        key={`${item.id}-${project.id}`}
                        label={project.label}
                        url={project.url}
                        categoryTitle={item.title}
                        img={project.img}
                        type={project.type}
                        role={project.role}
                        description={project.description}
                        technologies={project.technologies}
                      />
                    )),
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
            {/* prev, next buttons*/}
            <div className="mt-2">
              <button
                className={`${styles.arrowBtn} ms-1`}
                onClick={() => instanceRef.current?.prev()}
                disabled={filteredItems.flatMap((i) => i.projects).length <= 1}
              >
                <FontAwesomeIcon
                  className={styles.arrowIcon}
                  icon={["fas", "arrow-right"]}
                />
              </button>

              <button
                className={styles.arrowBtn}
                onClick={() => instanceRef.current?.next()}
                disabled={filteredItems.flatMap((i) => i.projects).length <= 1}
              >
                <FontAwesomeIcon
                  className={styles.arrowIcon}
                  icon={["fas", "arrow-left"]}
                />
              </button>
            </div>

            {/* pagination */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              {filteredItems
                .flatMap((item) => item.projects)
                .map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                    style={{
                      width: "10px",
                      height: "12px",
                      borderRadius: "50%",
                      margin: "0 5px",
                      border: "none",
                      background:
                        currentSlide === idx ? "brown" : "var(--secondary-bg)",
                      cursor: "pointer",
                    }}
                  />
                ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </Element>
  );
};

export default Projects;
