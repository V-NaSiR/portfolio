import styles from "./Specification.module.css";

const Specification = ({ title, children }) => {
  return (
    <>
      <dt className={`${styles.title}`}>{title}</dt>
      <dd className={`${styles.description}`}>{children}</dd>
    </>
  );
};

export default Specification;
