import style from "./index.module.css";

const DesktopMenu = () => {
  return (
    <ul className={style.nav_menu}>
      <li className={style.menu_item}>
        <a href="#">Каталог</a>
      </li>
      <li className={style.menu_item}>
        <a href="#">О нас</a>
      </li>
      <li className={style.menu_item}>
        <a href="#">Подбор товара</a>
      </li>
      <li className={style.menu_item}>
        <a href="#">Наша команда</a>
      </li>
      <li className={style.menu_item}>
        <a href="#">Доставка и оплата</a>
      </li>
      <li className={style.menu_item}>
        <a href="#">Контакты</a>
      </li>
    </ul>
  );
};

export default DesktopMenu;
