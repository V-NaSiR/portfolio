import Header from "./Header";
import styles from "./AnimationBox.module.css";
import AnalogClock from "../AnalogClock";
import { Element } from "react-scroll";

import dustImage from "../../assets/images/Dust.png";

const AnimationBox = () => {
  return (
    <Element name="header">
      <div className={styles.animationBox}>
        <AnalogClock />
        <Header />
        <div className={`${styles.boardBase} ${styles.leftBoardBase}`}></div>
        <div className={`${styles.boardBase} ${styles.rightBoardBase}`}></div>
        <img className={styles.dust} src={dustImage} alt="Dust" />
        <div className={styles.ball}></div>
      </div>
    </Element>
  );
};

export default AnimationBox;
