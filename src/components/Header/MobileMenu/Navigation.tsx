import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { CSSProperties, FC } from "react";

type Props ={
  style?: CSSProperties
  toggleClose: () => void 
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation:FC<Props> = ({ style,toggleClose }) => (
  <motion.ul style={style} variants={variants}>
    {typeBoots.map((i, index) => (
      <MenuItem toggleClose={toggleClose} textBtn={i.value} hrefBtn={i.href} key={index} />
    ))}
  </motion.ul>
);

const typeBoots = [
  {
    value: "Каталог",
    href: "#catalog",
  },
  {
    value: "О нас",
    href: "#about",
  },
  {
    value: "Подбор товара",
    href: "#survey",
  },
  {
    value: "Наша команда",
    href: "#team",
  },
  {
    value: "Доставка и оплата",
    href: "/SneakMax/basket/",
  },
  {
    value: "Контакты",
    href: "#contacts",
  },
];
