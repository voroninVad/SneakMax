import { FC } from "react";
import { Sneakers } from "../../types";
import style from "./index.module.css";
import Btnshow from "../../assets/Show.png";
import BtnBasket from "../../assets/btn_basket.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { postBasket } from "../../Redux/basket/basketSlice";
import { Link } from "react-router-dom";

type Props = {
  item: Sneakers;
};

const SneakersCard: FC<Props> = ({ item }) => {

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
          <Link to={`/SneakMax/sneakers/${item.id}`}>          
            <img src={Btnshow} alt="" />
          </Link>
          <button onClick={() => handleAddBasket(item)}>
            <img src={BtnBasket} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SneakersCard;
