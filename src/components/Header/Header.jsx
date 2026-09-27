import { useState } from "react";
import Navbar from "./Navbar";
import styles from "./AnimationBox.module.css";
import { scroller } from "react-scroll";
import TypewriterLoop from "../Effects/TypewriterLoop";

import robotImage from "../../assets/img/chalk-robot.png";
import robotHandImage from "../../assets/img/chalk-robot-hand.png";
import arrowImage from "../../assets/img/Arrow.png";

const navItems = [
  {
    id: "about",
    value: "درباره من",
  },
  {
    id: "skill",
    value: "مهارت های من",
  },
  {
    id: "project",
    value: "نمونه کار های من",
  },
  {
    id: "experience",
    value: "تجربه های کاری من",
  },
  {
    id: "specifications",
    value: "کمی بیشتر درباره من",
  },
];

const scrollTo = (elementName) => {
  scroller.scrollTo(elementName, {
    duration: 700,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

const getPersianDate = () => {
  const date = new Date();
  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};

const title = "Full Stack Developer";

const Header = () => {
  const [boardAnimateEnd, setBoardAnimateEnd] = useState(false);
  const [roleAnimateEnd, setRoleAnimateEnd] = useState(false);

  return (
    <header
      className={`${styles.board} header`}
      onAnimationEnd={(e) => {
        if (e.animationName.includes("boardFall")) {
          setBoardAnimateEnd(true);
        }
      }}
    >
      <div className="d-flex justify-content-between">
        <span>یاد می‌گیرم، می‌سازم، بهتر می‌شوم</span>
        <sup>به نام خداوند جان و خرد</sup>
        <span className={styles.date}>{getPersianDate()}</span>
      </div>

      <div className="mt-4">
        <h1
          className={`text-center mb-2 ${styles.name} ${boardAnimateEnd ? styles.showName : ""}`}
        >
          نصیر نمائی
        </h1>

        <h2
          className={`${styles.role} ${boardAnimateEnd ? styles.showRole : ""}`}
          onAnimationEnd={(e) => {
            if (e.animationName.includes("letterReveal")) {
              setRoleAnimateEnd(true);
            }
          }}
        >
          {title.split("").map((char, index) => (
            <span
              key={index}
              style={{
                animationDelay: `${0.9 + index * 0.045}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
      </div>

      <div className={styles.robotImgBox}>
        <img className={styles.robotImg} src={robotImage} alt="robot" />
        <img className={styles.robotImgHand} src={robotHandImage} alt="robot" />
      </div>

      <Navbar navItems={navItems} />

      {roleAnimateEnd && (
        <TypewriterLoop
          texts={[" طراحی و توسعه وب‌اپلیکیشن‌های مدرن از Frontend تا Backend"]}
          deleteText={false}
          speed={70}
          initialDelay={800}
        />
      )}

      <button
        className={`${styles.scrollDown} ${boardAnimateEnd ? styles.showScrollDown : ""}`}
        onClick={() => scrollTo("about")}
      >
        <img src={arrowImage} alt="scroll down" />
      </button>
    </header>
  );
};

export default Header;
