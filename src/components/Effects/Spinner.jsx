import styles from "./Spinner.module.css";

const Spinner = ()=>{
    return(
        <div className={styles.spinnerOverlay}>
          <div class={styles.ldsHourglass}></div>
        </div>
    );
};

export default Spinner;