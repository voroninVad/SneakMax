import HeaderSlide from "./HeaderSlide";
import style from "./index.module.css";
import boot from '../../assets/boot.png'
import { FC } from "react";

type Props = {
    nextStep: () => void;
};

const Slide1: FC<Props> = ({ nextStep })  => {
    const items = new Array(6).fill('Элемент');
    return ( 
        <div className={style.slide}>
            <HeaderSlide  title={'Мы подберем идеальную пару для вас'} desc={'Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями '} />
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
                <button onClick={nextStep}>Следующий шаг</button>
            </div>
        </div>
     );
}
 
export default Slide1;