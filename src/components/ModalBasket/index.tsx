import { FC } from "react";
import Modal from "../../features/Modal";
import style from "./index.module.css";
import { Basket } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { delBasket } from "../../Redux/basket/basketSlice";
import { Link } from "react-router-dom";

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
    <Modal>
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_65_683)">
                    <path
                      d="M18.5715 2.85715H13.5715V2.14285C13.5715 0.959387 12.6121 0 11.4287 0H8.57152C7.38805 0 6.42867 0.959387 6.42867 2.14285V2.85715H1.42865C1.03415 2.85715 0.714355 3.17695 0.714355 3.57145C0.714355 3.96595 1.03419 4.28571 1.42865 4.28571H2.20506L3.57151 19.3507C3.6052 19.7196 3.91537 20.0015 4.28581 20H15.7144C16.0848 20.0015 16.395 19.7196 16.4287 19.3507L17.7951 4.28571H18.5715C18.966 4.28571 19.2858 3.96591 19.2858 3.57141C19.2858 3.17691 18.966 2.85715 18.5715 2.85715ZM7.85722 2.14285C7.85722 1.74835 8.17702 1.42856 8.57152 1.42856H11.4287C11.8232 1.42856 12.143 1.74835 12.143 2.14285V2.85715H7.85726V2.14285H7.85722ZM15.0622 18.5714H4.93796L3.64295 4.28571H7.14296H16.3608L15.0622 18.5714Z"
                      fill="#4D4D4D"
                      fill-opacity="0.3"
                    />
                    <path
                      d="M7.8573 16.381C7.85722 16.38 7.85717 16.379 7.85709 16.378L7.14279 6.37805C7.11479 5.98355 6.77227 5.68647 6.3778 5.71447C5.9833 5.74247 5.68623 6.085 5.71423 6.47946L6.42853 16.4794C6.45519 16.854 6.76733 17.144 7.14283 17.143H7.19427C7.58781 17.1157 7.88467 16.7745 7.8573 16.381Z"
                      fill="#4D4D4D"
                      fill-opacity="0.3"
                    />
                    <path
                      d="M9.99994 5.71436C9.60544 5.71436 9.28564 6.03415 9.28564 6.42865V16.4286C9.28564 16.8231 9.60544 17.1429 9.99994 17.1429C10.3944 17.1429 10.7142 16.8231 10.7142 16.4286V6.42865C10.7142 6.03415 10.3944 5.71436 9.99994 5.71436Z"
                      fill="#4D4D4D"
                      fill-opacity="0.3"
                    />
                    <path
                      d="M13.6219 5.71423C13.2274 5.68623 12.8849 5.9833 12.8569 6.3778L12.1426 16.3778C12.1137 16.7712 12.4091 17.1136 12.8026 17.1425C12.8038 17.1426 12.8049 17.1427 12.8062 17.1428H12.8569C13.2324 17.1437 13.5445 16.8537 13.5712 16.4792L14.2855 6.47921C14.3135 6.08475 14.0164 5.74227 13.6219 5.71423Z"
                      fill="#4D4D4D"
                      fill-opacity="0.3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_65_683">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
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
