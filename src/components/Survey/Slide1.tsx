import HeaderSlide from "./HeaderSlide";
import style from "./index.module.css";
import bootImg from "../../assets/boot.png";
import { FC } from "react";

type Props = {
  nextStep: () => void;
};

const typeBoots = [
  {
    value: "кеды",
    id: "0",
  },
  {
    value: "кеды",
    id: "1",
  },
  {
    value: "кеды",
    id: "2",
  },
  {
    value: "кеды",
    id: "3",
  },
  {
    value: "кеды",
    id: "4",
  },
  {
    value: "кеды",
    id: "5",
  },
];

const Slide1: FC<Props> = ({ nextStep }) => {
  return (
    <div className={style.slide}>
      <HeaderSlide
        title={"Мы подберем идеальную пару для вас"}
        desc={
          "Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями "
        }
      />
      <div className={style.slide_content}>
        <h3>Какой тип кроссовок рассматриваете?</h3>
        <div className={style.types_boot}>
          {typeBoots.map((boot) => (
            <div className={style.boot} key={boot.id}>
              <img src={bootImg} alt="boot" />
              <input className={style.input} type="checkbox" id={boot.id} />
              <label htmlFor={boot.id}>{boot.value}</label>
            </div>
          ))}
        </div>
      </div>
      <div className={style.nextSlide_btn}>
        <span>1 из 3</span>
        <button onClick={nextStep}>Следующий шаг</button>
      </div>
    </div>
  );
};

export default Slide1;
