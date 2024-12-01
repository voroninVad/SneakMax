import { useEffect, useState } from "react";
import style from "./index.module.css";
import { AppDispatch, RootState } from "../../Redux/store";
import { Sneakers } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { postBasket } from "../../Redux/basket/basketSlice";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSneakerId } from "../../Redux/sneakers/sneakerSlise";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import star from "../../assets/Star.png";
import { color } from "motion/react";

const Sneaker = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const sneaker = useSelector<RootState, Sneakers[]>(
    (state) => state.sneaker.data
  );
  console.log(sneaker);
  const [selectedSize, setSelectedSize] = useState(0);

  useEffect(() => {
    if (id) {
      dispatch(fetchSneakerId(id));
    }
  }, [id]);

  const handleAddBasket = (tovar: Sneakers) => {
    if (selectedSize !== 0) {
      const newItem = {
        id: tovar.id,
        imgUrl: tovar.imgUrl,
        title: tovar.title,
        price: tovar.price,
        size: selectedSize,
      };

      dispatch(postBasket(newItem));
    } else {
      alert("вы не выбрали размер");
    }
  };
  const history = useNavigate()
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
        history('/SneakMax/')
    }
};
  return (
    <>
      <Header />
      <Hero />
      <div className={style.panel} onClick={handleOverlayClick}></div>
      <div className="">
        {sneaker.map((data: Sneakers) => (
          <div key={data.id} className={style.containerSneaker}>
            <img src={data.imgUrl} alt={data.title} />
            <div className={style.info_tovar}>
              <div className={style.info_header}>
                <span>Артикул: {data.vendorСode}</span>
                <span>В наличии: <b style={{color:'#000'}}>{data.inStock} шт</b></span>
              </div>
              <h3>{data.title}</h3>
              <div className={style.stars}>
                {Array.from({ length: data.stars }, (_, index) => (
                  <img className={style.star} key={index} src={star} />
                ))}
              </div>
              <div className={style.size_tovar}>
                <p>Выберите размер</p>
                <div className={style.sizes}>
                  {data.sizes.map((size: number) => (
                    <div className="">
                      <input type="radio" name="size" id={`size${size}`} />
                      <label
                        htmlFor={`size${size}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </label>
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
          </div>
        ))}

        {/* <button className={style.close_btn} onClick={closeModal}>
          &times;
        </button> */}
      </div>
    </>
  );
};

export default Sneaker;
