import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { AppDispatch, RootState } from "../../Redux/store";
import { Basket, Order } from "../../types";
import { useEffect, useState } from "react";
import { clearBasket, delBasket, fetchBasket } from "../../Redux/slices/basketSlice";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const PageBasket = () => {
  const [numberOrder, setNumberOrder] = useState<number | null>(null);
  const basket = useSelector<RootState, Basket[]>((state) => state.basket.data);
  const resultSum = useSelector<RootState, number>(
    (state) => state.basket.resultSum
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchBasket());
    const number = Math.floor(100000 + Math.random() * 900000);
    setNumberOrder(number);
  }, []);
  const handleRemove = (tovarRemove:Basket) =>{
    dispatch(delBasket(tovarRemove.id))
  }
  const { register, handleSubmit} = useForm<Order>();
  const history = useNavigate();

  const onSubmit: SubmitHandler<Order> = (data) => {
    console.log(`Заказ №${numberOrder} Имя ${data.name_user} Номер ${data.tel_user} E-mail ${data.email_user}`)
    history('/SneakMax/');
    dispatch(clearBasket());   
  };

  return (
    <>
    <Header />
    <Hero />
    <div className="panel"></div>
    <form className="container_basket" onSubmit={handleSubmit(onSubmit)}>
      <div className="header_basket">
        <h3>Оформление заказа</h3>
        <span>Заказ {numberOrder}</span>
      </div>
      <div className="basket_order_composition">
        <span>Товаров в заказе: {basket.length} шт.</span>
        <span>Общая сумма заказа: {resultSum} &#8381;</span>
        <details>
          <summary>Состав заказа</summary>
          <div key={basket.length} className="basket_tovar">
            {basket.map((item, index) => (
              <div key={index} className="tovar">
                <img src={item.imgUrl} alt={item.title} />
                <div className="title_price_tovar">
                  <h4>{item.title}</h4>
                  <h3>{item.price}</h3>
                </div>
                <button onClick={() => handleRemove(item)}>
                  Удалить{item.id}
                </button>
              </div>
            ))}
          </div>
        </details>
      </div>

      <input type="text"  id="" placeholder="Ваше имя" {...register("name_user")}/>
      <input type="tel" id="" placeholder="Номер телефона" {...register("tel_user")}/>
      <input type="email" id="" placeholder="E-mail" {...register("email_user")}/>
      <button type="submit" className="order">Оформить заказ</button>
    </form>
    
    </>
    
  );
};

export default PageBasket;