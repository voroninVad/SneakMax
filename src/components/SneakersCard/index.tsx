import { FC, useState } from "react";
import { Sneakers } from "../../types";
import style from "./index.module.css";
import ModalSneaker from "../ModalSneaker";
import Btnshow from "../../assets/Show.png";
import BtnBasket from "../../assets/btn_basket.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { postBasket } from "../../Redux/basket/basketSlice";

type Props = {
  item: Sneakers;
};

const SneakersCard: FC<Props> = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const dispatch = useDispatch<AppDispatch>();
  const handleAddBasket = (tovar: Sneakers) => {
    const newItem = {
      id: tovar.id,
      imgUrl: tovar.imgUrl,
      title: tovar.title,
      price: tovar.price,
      size: tovar.sizes[0],
    };

    dispatch(postBasket(newItem));
  };

  return (
    <>
      <div className={style.item_sneaker}>
        <img src={item.imgUrl} alt={item.title} />
        <h3>{item.title}</h3>
        <span>{item.price} p.</span>
        <div className={style.panel_hover}>
          <button onClick={openModal}>
            <img src={Btnshow} alt="" />
          </button>
          <button onClick={() => handleAddBasket(item)}>
            <img src={BtnBasket} alt="" />
          </button>
        </div>
      </div>

      {isModalOpen && <ModalSneaker closeModal={closeModal} data={item} />}
    </>
  );
};

export default SneakersCard;
