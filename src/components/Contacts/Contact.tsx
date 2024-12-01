import { FC, useState } from "react";
import style from "./index.module.css";

type Props = {
  title: string;
  btn: boolean;
};

const Contact: FC<Props> = ({ title, btn }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={style.contact}>
      <span className={style.contact_title}>
        {title}
        {btn ? (
          <div
            className={style.tooltipContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className={style.questionMark}>?</span>
            {isHovered && (
              <div className={style.tooltip}>
                Адрес и телефон для корреспонденции, инвесторов. Вопросы о
                доставке, качестве обслуживания и товара просьба задавать в
                отдел продаж.
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </span>
      <h2 className={style.tel}>+7 800 789 89 89</h2>
      <p className={style.address}>г. Санкт-Петербург, Комсомольская, 43 к1</p>
    </div>
  );
};

export default Contact;
