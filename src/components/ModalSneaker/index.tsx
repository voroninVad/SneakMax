import { FC, useState } from "react";
import Modal from "../../features/Modal";
import style from "./index.module.css";
//import { addBasket } from "../../Redux/sneakers/sneakersSlice";
import { AppDispatch } from "../../Redux/store";
import { Sneakers } from "../../types";
import { useDispatch } from "react-redux";
import { postBasket } from "../../Redux/slices/basketSlice";

type Props = {
  closeModal: () => void;
  data: Sneakers;
};

const ModalSneaker: FC<Props> = ({ data, closeModal }) => {
  
  const dispatch = useDispatch<AppDispatch>();
  const [selectedSize, setSelectedSize] = useState(0);
  const handleAddBasket = (tovar: Sneakers) => {
    if (selectedSize !== 0) {
      const newItem = {
        id: tovar.id,
        imgUrl: tovar.imgUrl,
        title: tovar.title,
        price: tovar.price,
        size: selectedSize,
      };

      dispatch(postBasket(newItem))
      closeModal();
    } else {
      alert("вы не выбрали размер");
    }
  };
  return (
    <Modal>
      <div
      key={data.id}
        className={style.containerSneaker}
      >
        <img src={data.imgUrl} alt={data.title} />
        <div className={style.info_tovar}>
          <div className={style.info_header}>
            <span>Артикул: {data.vendorСode}</span>
            <span>В наличии: {data.inStock} шт</span>
          </div>
          <h3>{data.title}</h3>
          {data.stars && (
            <span className={style.stars}>
              {"★".repeat(data.stars).replace(/&/g, "")}
            </span>
          )}
          <div className={style.size_tovar}>
            <p>Выберите размер</p>
            <div className={style.sizes}>
              {data.sizes.map((size) => (
                <div className="">
                  <input type="radio" name="size" id={`size${size}`} />
                  <label htmlFor={`size${size}`} onClick={() => setSelectedSize(size)}>{size}</label>
                </div>
              ))}
            </div>
          </div>
          <div className={style.price_tovar}>
            <h2>{data.price}</h2>
            <span>{data.oldPrice}</span>
          </div>
          <button
            className={style.order_tovar_btn}
            onClick={() => handleAddBasket(data)}
          >
            Заказать
          </button>
        </div>
        <div className={style.description}>
          <h3>Описание</h3>
          <p>{data.description}</p>
        </div>
        <div className={style.characteristics}>
          <h3>Характеристики</h3>
          <span>Пол: {data.gender}</span>
          <span>Цвета: {data.color}</span>
          <span>Состав: {data.compound}</span>
          <span>Страна: {data.country}</span>
        </div>

        <button className={style.close_btn} onClick={closeModal}>
          &times;
        </button>
      </div>
    </Modal>
  );
};

export default ModalSneaker;
