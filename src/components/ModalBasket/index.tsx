import { FC } from "react";
import Modal from "../../features/Modal";
import style from "./index.module.css";
import { Basket } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { delBasket } from "../../Redux/basket/basketSlice";
import { Link } from "react-router-dom";
import img from '../../assets/Group.png'

type Props = {
  closeModal: () => void;
  data: Basket[];
};

const ModalBasket: FC<Props> = ({ closeModal, data }) => {
  const dispatch = useDispatch<AppDispatch>();
  const resultSum = useSelector<RootState, number>(
    (state) => state.basket.resultSum
  );

  const handleRemove = (tovarRemove: Basket) => {
    dispatch(delBasket(tovarRemove.id));
  };

  return (
    <Modal closeModal={closeModal}>
      <div className={style.containerBasket}>
        <div key={data.length} className={style.basket_tovar}>
          {data.map((item, index) => (
            <div key={index} className={style.tovar}>
              <img src={item.imgUrl} alt={item.title} />
              <div className={style.title_price_tovar}>
                <h4>{item.title}</h4>
                <h3>{item.price}</h3>
              </div>
              <button onClick={() => handleRemove(item)}>
                <img src={img} alt="" />
              </button>
            </div>
          ))}
        </div>
        <div className={style.basket_btn}>
          <div className={style.results}>
            <p>Итого:</p>
            <h3>{resultSum}</h3>
          </div>
          <Link onClick={closeModal} to="/SneakMax/basket/">
            Перейти в корзину
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default ModalBasket;
