import style from './index.module.css'
import imgAbout from '../../assets/MaskGroup.png'

const About = () => {
    return ( 
        <section className={style.about}>
            <div className={style.about_description}>
                <h3>Пара слов о нас</h3>
                <p>Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.</p>
                <h4>SneakMax</h4>
            </div>
            <div className={style.about_img}>
                <img src={imgAbout} alt="about" />
            </div>
        </section>
     );
}
 
export default About;