export const pageVariants = {
    slideLeft: {
        initial: { opacity: 0, x: '100%'},
        animate: { opacity: 1, x: 0},
        exit: { opacity: 0, x: '-100%'},
    },
    slideRight: {
        initial: { opacity: 0, x: '-100%'},
        animate: { opacity: 1, x: 0},
        exit: { opacity: 0, x: '100%'},
    },
    fade: {
        initial: { opacity: 0},
        animate: { opacity: 1},
        exit: { opacity: 0},
    },
    rotate: {
        initial: { opacity: 0, rotate: -90, scale: 0.8 },
        animate: { opacity: 1, rotate: 0, scale: 1},
        exit: { opacity: 0, rotate: 90, scale: 0.8},
    },
}