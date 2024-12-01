import { useDispatch, useSelector } from "react-redux";
import { useIsMobile } from "../../hooks/useMobile";
import DesktopMenu from "./DesktopMenu";
import style from "./index.module.css";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import ModalBasket from "../ModalBasket";
import { AppDispatch, RootState } from "../../Redux/store";
import { Basket } from "../../types";
import { fetchBasket } from "../../Redux/basket/basketSlice";
import imgBasket from '../../assets/btn_basket.png'

const Header = () => {
  const basketLength = useSelector<RootState, number>(
    (state) => state.basket.data.length
  );
  const basket = useSelector<RootState, Basket[]>((state) => state.basket.data);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchBasket());
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <header>
        <div className={style.container_header}>
          <div className={style.header__logo}>
            <a href="/SneakMax/">SneakMax</a>
          </div>
          {isMobile ? <MobileMenu /> : <DesktopMenu />}
          <button className={style.card} onClick={openModal}>
            Корзина
            <img src={imgBasket} alt="корзина" />
            {basketLength > 0 && <span>{basketLength}</span>}
          </button>
        </div>
      </header>

      {isModalOpen && <ModalBasket closeModal={closeModal} data={basket} />}
    </>
  );
};

export default Header;
