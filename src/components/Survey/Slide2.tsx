import HeaderSlide from "./HeaderSlide";
import style from "./index.module.css";
import banner from "../../assets/banner.png";
import { FC } from "react";

type Props = {
  nextStep: () => void;
};

const items = [
  {
    value: "менее 36",
    id: "6",
  },
  {
    value: "36-38",
    id: "7",
  },
  {
    value: "39-41",
    id: "8",
  },
  {
    value: "42-44",
    id: "9",
  },
  {
    value: "45 и больше",
    id: "10",
  },
];

const Slide2: FC<Props> = ({ nextStep }) => {
  return (
    <div className={style.slide}>
      <HeaderSlide
        title={"Мы подберем идеальную пару для вас"}
        desc={
          "Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями "
        }
      />
      <div className={style.slide_content}>
        <h3>Какой размер вам подойдет?</h3>
        <div className={style.sizes_boot}>
          {items.map((item) => (
            <div className={style.boot} key={item.id}>
              <input className={style.input} type="checkbox" id={item.id} />
              <label htmlFor={item.id}>{item.value}</label>
            </div>
          ))}
        </div>
        <img className={style.banner} src={banner} alt="banner" />
      </div>
      <div className={style.nextSlide_btn}>
        <span>2 из 3</span>
        <button onClick={nextStep}>Следующий шаг</button>
      </div>
    </div>
  );
};

export default Slide2;
