import DesktopMenu from "../Header/DesktopMenu";
import style from "./index.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={style.container_footer}>
        <div className={style.footer__logo}>
          <a href="/SneakMax/">SneakMax</a>
        </div>
        <DesktopMenu />
      </div>
    </footer>
  );
};

export default Footer;
