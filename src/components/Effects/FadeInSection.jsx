import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { cloneElement } from "react";

const FadeInSection = ({
  children,
  direction = "left",
  delay = 0,
  activeClass = "",
  activeDelay = 0,
  onActive,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!inView || !activeClass) return;

    const timeout = setTimeout(() => {
      setIsActive(true);
      onActive?.();
    }, activeDelay);

    return () => clearTimeout(timeout);
  }, [inView, activeClass, activeDelay, onActive]);

  return cloneElement(children, {
    ref,
    style: {
      transitionDelay: `${delay}s`,
      ...children.props.style,
    },
    className: `
            ${children.props.className || ""}
            fade-section
            ${inView ? "show" : ""}
            from-${direction}
            ${isActive ? activeClass : ""}
        `,
  });
};

export default FadeInSection;
