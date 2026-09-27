import { useEffect, useState } from "react";

function TypewriterLoop({
  texts,
  speed = 120,
  deleteSpeed = 50,
  pause = 800,
  initialDelay = 3000,
  deleteText = true,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setStartTyping(true);
    }, initialDelay);

    return () => clearTimeout(delayTimeout);
  }, [initialDelay]);

  useEffect(() => {
    if (!startTyping) return;

    const currentText = texts[textIndex];
    let timeout;

    if (!deleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
    }

    // وقتی deleteText خاموش باشد، بعد از اتمام تایپ هیچ کاری نکن
    else if (!deleting && charIndex === currentText.length) {
      if (deleteText) {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deleteSpeed);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [
    startTyping,
    texts,
    charIndex,
    deleting,
    textIndex,
    speed,
    deleteSpeed,
    pause,
    deleteText,
  ]);

  return (
    <h2 className="typewriterLoop">
      {displayedText}
      <span className="cursor"></span>
    </h2>
  );
}

export default TypewriterLoop;
