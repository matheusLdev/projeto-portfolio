export const fadeIn = {
  hidden: { opacity: 0},
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const fadeOutDown = {
  hidden: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  visible: { opacity: 1, y: 0 },
};