import Header from "./Header";
import styles from "./AnimationBox.module.css";
import AnalogClock from "../AnalogClock";
import { Element } from "react-scroll";

import dustImage from "../../assets/images/Dust.webp";
import { useState } from "react";

const AnimationBox = () => {
  const [ballAnimateEnd, setBallAnimateEnd] = useState(false);

  return (
    <Element name="header">
      <div className={styles.animationBox}>
        <AnalogClock />
        <Header ballAnimateEnd={ballAnimateEnd} />
        <div
          className={`${styles.boardBase} ${styles.leftBoardBase} ${ballAnimateEnd ? styles.leftBoardBaseAnimate : ""}`}
        ></div>
        <div
          className={`${styles.boardBase} ${styles.rightBoardBase} ${ballAnimateEnd ? styles.rightBoardBaseAnimate : ""}`}
        ></div>
        <img className={styles.dust} src={dustImage} alt="Dust" />
        <div
          className={styles.ball}
          onAnimationEnd={(e) => {
            if (e.animationName.includes("ballRoll")) {
              setBallAnimateEnd(true);
            }
          }}
        ></div>
      </div>
    </Element>
  );
};

export default AnimationBox;
