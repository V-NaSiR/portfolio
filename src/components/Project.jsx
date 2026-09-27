import styles from "./Project.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chips from "./UI/Chips";

import noImage from "../assets/img/no-image.jpg";

const Project = ({
  label,
  url,
  categoryTitle,
  img,
  type,
  role,
  description,
  technologies,
}) => {
  return (
    <article className={`${styles.card} keen-slider__slide card`}>
      <a
        className={styles.imgContainer}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={`${styles.img} card-img-top`}
          src={img ? img : noImage}
          alt={label ? label : categoryTitle}
        />
      </a>

      <div className={`${styles.cardBody} card-body pt-2`}>
        <h5 className={`${styles.title} mb-1`}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {label ? label : categoryTitle}
          </a>
        </h5>

        <div className="d-flex justify-content-between align-items-start gap-1">
          <div>
            <strong>نقش: </strong>
            <span>{role}</span>
          </div>

          <span className="badge">{type === "company" ? "شرکتی" : "شخصی"}</span>
        </div>

        <hr className="my-1" />

        <p className="mb-2">{description}</p>

        <div className="d-flex flex-wrap gap-1 mt-auto">
          {technologies?.map((tec, index) => (
            <Chips key={index} text={tec} />
          ))}
        </div>

        <a
          className={styles.btn}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          مشاهده بیشتر
          <FontAwesomeIcon
            className={styles.icon}
            icon={["fas", "arrow-up-right-from-square"]}
          />
        </a>
      </div>
    </article>
  );
};
export default Project;
