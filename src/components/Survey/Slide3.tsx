import HeaderSlide from "./HeaderSlide";
import style from "./index.module.css";
import { FC } from "react";

type Props = {
    nextStep: () => void;
};

const Slide3: FC<Props> = ({ nextStep })  => {
    return ( 
        <div className={style.slide}>
            <HeaderSlide title={'Мы подберем идеальную пару для вас'} desc={'Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями '}/>
            <div className={style.slide_content}>
                <h3>Уточните какие-либо моменты</h3>
                <textarea name="comment" placeholder="Введите сообщение"></textarea>
            </div>
            <div className={style.nextSlide_btn}>
                <span>3 из 3</span>
                <button onClick={nextStep}>Следующий шаг</button>
            </div>
        </div>
     );
}
 
export default Slide3;