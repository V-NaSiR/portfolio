import Specification from "./Specification";
import styles from "./Specification.module.css";
import { Element } from "react-scroll";
import FadeInSection from "./Effects/FadeInSection";

const Specifications = () => {
  const specifications = [
    {
      id: 1,
      title: "نام:",
      description: "نصیر نمائی غفاری",
    },
    {
      id: 2,
      title: "محل سکونت:",
      description: "مشهد",
    },
    {
      id: 3,
      title: "تخصص:",
      description: "Full Stack Developer",
    },
    {
      id: 4,
      title: "تمرکز:",
      description: "Software Engineering & AI Engineering",
    },
  ];

  const detail = [
    {
      id: 1,
      title: "تکنولوژی‌های اصلی:",
      description: "React, Next.js, C#, ASP.NET Core",
    },
    {
      id: 2,
      title: "تجربه:",
      description: "توسعه Frontend و Backend",
    },
    {
      id: 3,
      title: "ایمیل:",
      description: "nasir.namaei@gmail.com",
    },
    {
      id: 4,
      title: "موبایل:",
      description: "09150783577",
    },
  ];
  return (
    <Element name="specifications">
      <section className="specifications secondary-bg">
        <div className="container">
          <h2 className="section-title mb-4">کمی بیشتر درباره من</h2>
          <div className="row">
            <FadeInSection direction="right">
              <dl
                className={`${styles.descriptionList} col-lg-6 col-12 mx-auto`}
              >
                {specifications.map((x) => (
                  <Specification key={x.id} title={x.title}>
                    {x.description}
                  </Specification>
                ))}
              </dl>
            </FadeInSection>

            <FadeInSection direction="left">
              <dl
                className={`${styles.descriptionList} col-lg-6 col-12 mx-auto`}
              >
                {detail.map((x) => (
                  <Specification key={x.id} title={x.title}>
                    {x.description}
                  </Specification>
                ))}
              </dl>
            </FadeInSection>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Specifications;
