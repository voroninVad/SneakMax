import HeaderSlide from "./HeaderSlide";
import style from "./index.module.css";
import banner from '../../assets/banner.png'
import { FC } from "react";

type Props = {
    nextSlide: () => void;
};

const Slide2: FC<Props> = ({ nextSlide })  => {
    const items = ['менее 36','36-38','39-41','42-44','45 и больше'];
    return ( 
        <div className={style.slide}>
            <HeaderSlide title={'Ваша подборка готова!'} desc={'Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями'}/>
            <div className={style.slide_content}>
                <h3>Какой размер вам подойдет?</h3>
                <div className={style.sizes_boot}>
                {items.map((item, index) => (
                <div key={index} className={style.boot}>
                    <label htmlFor={`${index}`}>
                        <input type="radio" name="type" id={`${index}`} />
                        {item}
                    </label>
                </div>
                ))}
                </div>
                <img src={banner} alt="banner" />
            </div>
            <div className={style.nextSlide_btn}>
                <span>2 из 3</span>
                <button onClick={nextSlide}>Следующий шаг</button>
            </div>
        </div>
     );
}
 
export default Slide2;