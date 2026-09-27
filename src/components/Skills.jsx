// import { useState } from "react";

import { Element } from "react-scroll";
import { skillSections } from "../utils/skills-data";

import Skill from "./Skill";
import FadeInSection from "./Effects/FadeInSection";

const Skills = () => {
  // const [isOpen, setIsOpen] = useState(false);
  let skillIndex = 0;

  return (
    <Element name="skills">
      <section id="skills" className="py-4">
        <div className="container">
          <h2 className="section-title text-center mb-4">مهارت های من</h2>

          {skillSections.map((section, sectionIndex) => (
            <section key={section.id} className="row align-items-center mt-4">
              <FadeInSection direction="bottom" delay={sectionIndex * 0.6}>
                <h5 className="section-title text-start mb-3 mb-md-0 col-md-2 col-xl-1">
                  {section.title}
                </h5>
              </FadeInSection>

              <div className="row row-gap-4 col-md-10 col-xl-11">
                {section.skills.map((skill) => {
                  const index = skillIndex++;

                  return (
                    <div className="col-lg-3 col-md-6 col-12">
                      <Skill
                        key={`${section.id}-${skill.id}`}
                        {...skill}
                        index={index}
                      />
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
          {/* <button className="btn-show-more mt-3"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#levelOfSkills"
                                aria-expanded={isOpen}
                                aria-controls="levelOfSkills"
                                onClick={() => setIsOpen(!isOpen)}
                            >مشاهده سطح مهارت ها
                            <FontAwesomeIcon className="ms-2" icon={['fas', isOpen? 'angle-up' : 'angle-down']} bounce/>
                            </button>
                            
                        <section id="levelOfSkills" className="collapse col-md-10 col-12 mx-auto">
                            <div className={`${specificationStyle.notesOfSkills} col-lg-10 col-12 mx-auto`}>
                                <h3 className="section-title">سطح مهارت ها</h3>
                                <dl className={`${specificationStyle.rateOfSkills} col-xl-6 col-lg-8 col-md-4 col-8 mx-auto`}>
                                    {skills.map((skill, index) => (

                                        <Specification key={index} title={skill.title} index={index}>
                                            {[...Array(5)].map((_, i) => (
                                                <FadeInSection key={i} direction="bottom" delay={index * 0.2}>
                                                    <FontAwesomeIcon icon={['fas', 'star']} style={{ color: i < skill.stars ? "gold" : "lightgray" }} />
                                                </FadeInSection>
                                            ))}
                                        </Specification>

                                    ))}
                                </dl>
                            </div>
                        </section> */}
        </div>
      </section>
    </Element>
  );
};

export default Skills;
