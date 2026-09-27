import { useEffect, useState } from "react";
import styles from "./AnalogClock.module.css";

import clockImage from "../assets/images/clock-brown.png";
import hourHandImage from "../assets/images/Hours Hand.png";
import minuteHandImage from "../assets/images/Min Hand.png";
import secondHandImage from "../assets/images/red clock hand.png";
import clockDotImage from "../assets/images/clock-middle.png";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className={styles.clockBox}>
      <img className={styles.clock} src={clockImage} alt="clock" />
      <img
        src={hourHandImage}
        alt="hour hand"
        className={`${styles.hand} ${styles.hour}`}
        style={{ transform: `rotate(${hourDeg}deg)` }}
      />
      <img
        src={minuteHandImage}
        alt="minute hand"
        className={`${styles.hand} ${styles.minute}`}
        style={{ transform: `rotate(${minuteDeg}deg)` }}
      />
      <img
        src={secondHandImage}
        alt="second hand"
        className={`${styles.hand} ${styles.second}`}
        style={{ transform: `rotate(${secondDeg}deg)` }}
      />
      <img
        src={clockDotImage}
        alt="clock middle"
        className={styles.centerDot}
      />
    </div>
  );
};

export default AnalogClock;
