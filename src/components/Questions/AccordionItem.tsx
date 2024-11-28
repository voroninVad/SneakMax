import { FC, useState } from 'react';
import style from './index.module.css'
import plus from '../../assets/plus.png'

interface Props {
    title: string;
    children: React.ReactNode;
  }

export const AccordionItem:FC<Props> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={style.accordion_item}>
        <div className={style.accordion_title} onClick={toggleAccordion}>
          {title}
          <span className={style.accordion_icon}>
            <img className={`${isOpen ? style.open : ""}`}src={plus} alt="plus" />
          </span>
        </div>
        {isOpen && <div className={style.accordion_content}>{children}</div>}
      </div>
    );
  };

  
export default AccordionItem;