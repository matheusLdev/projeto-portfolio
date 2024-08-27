import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from './style';
import { AnimateProps } from '../../types';

const Animate = ({ children, className, key }: AnimateProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className={className}
      key={key}
    >
      {children}
    </motion.div>
  );
};

export default Animate;