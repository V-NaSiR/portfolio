import { scroller } from "react-scroll";
import styles from "./Navbar.module.css";

import starImage from "../../assets/images/Star.png";
import chalkLineImage from "../../assets/images/chalk-line.png";

const Navbar = ({ navItems }) => {
  const scrollTo = (elementName) => {
    scroller.scrollTo(elementName, {
      duration: 700,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <nav className={`${styles.navbar} mt-2`}>
      <span className={styles.menuTitle}>فهرست</span>
      <ul className="d-flex flex-column row-gap-1 mt-3">
        {navItems.map((item) => (
          <li key={item.id} className={styles.navItem}>
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
