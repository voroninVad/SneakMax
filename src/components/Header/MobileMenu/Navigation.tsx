import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { CSSProperties, FC } from "react";

type Props ={
  style?: CSSProperties
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation:FC<Props> = ({ style }) => (
  <motion.ul style={style} variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = ["Каталог", "О нас", "Подбор товара", "Наша команда", "Доставка и оплата", "Контакты"];
