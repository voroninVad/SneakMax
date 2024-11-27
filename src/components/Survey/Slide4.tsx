import HeaderSlide from "./HeaderSlide";
import style from "./index.module.css";
import { FC } from "react";

type Props = {
    nextSlide: () => void;
};

const Slide4: FC<Props> = ({ nextSlide })  => {
    return ( 
        <div className={style.slide}>
            <HeaderSlide title={'Ваша подборка готова!'} desc={'Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог'}/>
            <form className={style.slide_form}>
                <h3>Получить предложение</h3>
                <p>Получите подборку подходящих для вас моделей на почту</p>
                <input type="text" name="name" placeholder="Ваше имя" />
                <input type="email" name="name" placeholder="E-mail" />
                <button type="submit">Получить</button>
            </form>
        </div>
     );
}
 
export default Slide4;