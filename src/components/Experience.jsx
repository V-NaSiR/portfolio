import styles from "./Experience.module.css";

import { Element } from "react-scroll";
import FadeInSection from "./Effects/FadeInSection";

const Experience = () => {
  return (
    <Element name="experiences">
      <FadeInSection direction="farBottom">
        <section id="experiences" className="py-4">
          <div className="container">
            <div
              className={`${styles.notesOfSkills} col-xl-8 col-lg-10 col-12 mx-auto ps-3 pe-4 px-sm-5 pt-4 pb-4`}
            >
              <h2 className="section-title text-center mt-3">
                تجربه های کاری من
              </h2>

              <div className="p-2 pe-4 pe-sm-5">
                <hr className="mt-2 mb-3" />

                <p className="fw-bold">
                  توسعه و نگهداری سامانه‌های تحت وب و پیاده‌سازی قابلیت‌های جدید
                  در محیط واقعی کسب‌وکار.
                </p>
                <ul className={styles.experienceList}>
                  <li>توسعه بخش‌های مختلف سامانه‌های تحت وب</li>
                  <li>طراحی و پیاده‌سازی قابلیت‌ها از ابتدا تا انتها</li>
                  <li>
                    توسعه منطق سمت سرور با{" "}
                    <span className="font-kalam">ASP.NET Core MVC</span>
                  </li>
                  <li>
                    طراحی و پیاده‌سازی <span className="font-kalam">Query</span>
                    ها و کار با <span className="font-kalam">SQL Server</span>
                  </li>
                  <li>
                    پیاده‌سازی درخواست‌های{" "}
                    <span className="font-kalam">AJAX</span> و تعاملات بدون{" "}
                    <span className="font-kalam">Refresh</span>
                  </li>
                  <li>توسعه و بهبود رابط کاربری</li>
                  <li>رفع باگ و نگهداری کدهای موجود</li>
                  <li>
                    کار با پروژه‌های <span className="font-kalam">Legacy</span>{" "}
                    و نسخه‌های مختلف <span className="font-kalam">.NET</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </Element>
  );
};

export default Experience;
