import { scroller } from "react-scroll";
import styles from "./Navbar.module.css";

import starImage from "../../assets/images/Star.webp";
import chalkLineImage from "../../assets/images/chalk-line.webp";

const navItems = [
  {
    id: "about",
    value: "درباره من",
  },
  {
    id: "skills",
    value: "مهارت های من",
  },
  {
    id: "projects",
    value: "نمونه کار های من",
  },
  {
    id: "experiences",
    value: "تجربه های کاری من",
  },
  {
    id: "specifications",
    value: "کمی بیشتر درباره من",
  },
];

const Navbar = ({ roleAnimateEnd }) => {
  const scrollTo = (elementName) => {
    scroller.scrollTo(elementName, {
      duration: 700,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <nav className={`${styles.navbar} mt-2`}>
      <span
        className={`${styles.menuTitle} ${roleAnimateEnd ? styles.showMenuTitle : ""}`}
      >
        فهرست
      </span>

      <ul className="d-flex flex-column row-gap-1 mt-3">
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className={`${styles.navItem} ${roleAnimateEnd ? styles.animate : ""}`}
            style={{ animationDelay: `${0.7 + index * 0.6}s` }}
          >
            <img className={styles.marker} src={starImage} alt="star" />
            <a className={styles.navLink} onClick={() => scrollTo(item.id)}>
              {item.value}
              <span className={styles.chalkLine}>
                <img src={chalkLineImage} alt="chalk line" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
