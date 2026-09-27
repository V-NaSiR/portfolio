import { useEffect, useState } from 'react';
import { scroller } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./BackToTopButton.module.css";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

    const toggleVisibility = () => {
        const shouldShow = window.scrollY > 400
        setIsVisible(shouldShow);

        if (!hasScrolledOnce && shouldShow) {
            setHasScrolledOnce(true);
        };
    }

    const scrollTo = (elementName) => {
        scroller.scrollTo(elementName, {
            duration: 700,
            delay: 0,
            smooth: "easeInOutQuart"
        });
    }

    useEffect(() => {
        toggleVisibility();
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={() => scrollTo("header")}
            className={styles.backToTopButton}
            style={{
                display: hasScrolledOnce ? 'block' : 'none',
                animation: isVisible ? `${styles.btnComeIn} .7s 1 forwards` : `${styles.btnOut} 1s 1 forwards`
            }}
        >
            <FontAwesomeIcon icon={['fas','arrow-up']} />
        </button>
    );
};

export default BackToTopButton;
