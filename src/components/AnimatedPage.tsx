import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedPage(props:{children:ReactNode}){
  return (
    <motion.div
      initial={{ x: '100vw' }} // Start off-screen to the right
      animate={{ x: 0 }} // Animate to its original position
      exit={{ x: '100vw' }} // Exit to the right when unmounting
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="absolute z-10 min-h-screen w-screen bg-white" // Ensure it takes at least full viewport height
    >
      {props.children}
    </motion.div>
  );

}

