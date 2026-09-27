import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Skill.module.css";
import FadeInSection from "./Effects/FadeInSection";

const Skill = ({
  icon,
  title,
  color,
  type,
  index,
  percentage,
  stars,
  className = "",
}) => {
  const [progress, setProgress] = useState(0);

  const handleMouseEnter = () => {
    // if (progress === 0) {
    let current = 0;

    const step = () => {
      if (current < percentage) {
        current += 1;
        setProgress(current);
        setTimeout(step, 12);
      }
    };

    setTimeout(() => {
      step();
    }, 500);
    // }
  };

  //   const animateProgress = useCallback(() => {
  //     let current = 0;

  //     const step = () => {
  //       if (current < percentage) {
  //         current += 1;
  //         setProgress(current);
  //         setTimeout(step, 12);
  //       }
  //     };

  //     step();
  //   }, [percentage]);

  let IconComponent = null;

  if (type === "component") {
    IconComponent = icon;
  }

  const getStarFill = (index, stars) => {
    const fullStars = Math.floor(stars);
    const decimal = stars - fullStars;

    // ستاره کاملاً پر
    if (index < fullStars) {
      return {
        background: "gold",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      };
    }

    // ستاره اعشاری
    if (index === fullStars && decimal > 0) {
      const percent = decimal * 100;

      return {
        background: `linear-gradient(
                -90deg,
                gold ${percent}%,
                lightgray ${percent}%
            )`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      };
    }

    // ستاره خالی
    return {
      color: "lightgray",
    };
  };

  return (
    <FadeInSection direction="left" delay={index * 0.15}>
      <div
        className={`${styles.iconBox}`}
        onMouseEnter={() => {
          handleMouseEnter();
        }}
      >
        <div
          className={`${styles.hoverOverlay}`}
          style={{ backgroundColor: color }}
        ></div>

        {type === "font" && (
          <FontAwesomeIcon
            className={`${styles.icon}`}
            icon={["fab", icon]}
            style={{ color }}
          />
        )}

        {type === "component" && IconComponent && (
          <IconComponent
            className={`${styles.imageIcon} ${styles[className] ?? ""}`}
            style={{ fill: color }}
          />
        )}

        {title && <span className={styles.title}>{title}</span>}

        {stars && (
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={styles.star}
                style={{
                  ...getStarFill(i, stars),
                  animationDelay: `${0.6 + index / 5 + i * 0.1}s`,
                }}
              />
            ))}
          </div>
        )}

        {percentage && (
          <div className={`${styles.hoverBox}`}>
            <span className={`${styles.percentNumber}`}>{progress}%</span>
            <div
              className={`${styles.progressBar}`}
              style={{ backgroundColor: color }}
            >
              <div
                className={`${styles.percentageBar}`}
                style={{
                  width: `${progress}%`,
                  backgroundImage: `repeating-linear-gradient(45deg, ${color} 0, ${color} 3px, #ffefe0 2px, #ffefe0 6px)`,
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </FadeInSection>
  );
};

export default Skill;
