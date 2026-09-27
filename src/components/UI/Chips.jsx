import styles from "./Chips.module.css";

const Chips = ({ text, className }) => {
  return <span className={`${styles.chips} ${className}`}>{text}</span>;
};

export default Chips;
