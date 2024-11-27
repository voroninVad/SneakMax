import HeaderSlide from "./HeaderSlide";
import style from "./index.module.css";
import boot from '../../assets/boot.png'
import { FC } from "react";

type Props = {
    nextSlide: () => void;
};

const Slide1: FC<Props> = ({ nextSlide })  => {
    const items = new Array(6).fill('Элемент');
    return ( 
        <div className={style.slide}>
            <HeaderSlide />
            <div className={style.slide_content}>
                <h3>Какой тип кроссовок рассматриваете?</h3>
                <div className={style.types_boot}>
                {items.map((item, index) => (
                <div key={index} className={style.boot}>
                    <img src={boot} alt="boot" />
                    <label htmlFor={`${index}`}>
                        <input type="radio" name="type" id={`${index}`} />
                        кеды
                    </label>
                </div>
                ))}
                </div>
            </div>
            <div className={style.nextSlide_btn}>
                <span>1 из 3</span>
                <button onClick={nextSlide}>Следующий шаг</button>
            </div>
        </div>
     );
}
 
export default Slide1;