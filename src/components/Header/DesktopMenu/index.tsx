import style from "./index.module.css";

const DesktopMenu = () => {
  return (
    <ul className={style.nav_menu}>
      <li className={style.menu_item}>
        <a href="#catalog">Каталог</a>
      </li>
      <li className={style.menu_item}>
        <a href="#about">О нас</a>
      </li>
      <li className={style.menu_item}>
        <a href="#survey">Подбор товара</a>
      </li>
      <li className={style.menu_item}>
        <a href="#team">Наша команда</a>
      </li>
      <li className={style.menu_item}>
        <a href="/SneakMax/basket/">Доставка и оплата</a>
      </li>
      <li className={style.menu_item}>
        <a href="#contacts">Контакты</a>
      </li>
    </ul>
  );
};

export default DesktopMenu;
