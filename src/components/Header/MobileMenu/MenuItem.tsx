import * as React from "react";
import { motion } from "framer-motion";

type Props ={
    textBtn: string
    hrefBtn: string
    toggleClose: () => void
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export const MenuItem:React.FC<Props> = ({ textBtn,hrefBtn, toggleClose }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleClose}
    >
      <a href={`${hrefBtn}`}>{textBtn}</a>
    </motion.li>
  );
};
