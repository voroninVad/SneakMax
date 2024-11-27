import { FC } from "react";
import style from "./index.module.css";

type Props ={
    title:string,
    desc: string
}

const HeaderSlide:FC<Props> = ({title, desc}) => {
    return ( 
        <div className={style.header_slide}>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
     );
}
 
export default HeaderSlide;