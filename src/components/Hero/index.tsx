import style from './index.module.css'

const Hero = () => {
    return ( 
        <section>
            <div className={`${style.container__hero} ${style.container}`}>
                <h1>Кроссовки известных брендов 
                с доставкой по России и СНГ</h1>
                <p>Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</p>
                <button>Перейти к покупкам</button>
            </div>
            <span className={style.hero_text} aria-hidden="true">SneakMax</span>
        </section>
     );
}
 
export default Hero;