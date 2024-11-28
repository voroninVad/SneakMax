import style from "./index.module.css";
import logoInst from "../../assets/Instagram_logo 1.png";
import img1 from "../../assets/Rectangle 37.jpg";
import img2 from "../../assets/Rectangle 39.jpg";
import img3 from "../../assets/Rectangle 38.jpg";
import img4 from "../../assets/Rectangle 40.jpg";
import img5 from "../../assets/Rectangle 41.jpg";
const gallary = [img1, img2, img3, img4, img5];

const Instagram = () => {
  return (
    <section className={style.instagram}>
      <div className={style.container_instagram}>
        <form className={style.left_form}>
          <h3>Есть вопросы?</h3>
          <p>Заполните форму и наш менеджер свяжется с вами</p>
          <input type="text" name="name" id="" placeholder="Ваше имя"/>
          <input type="tel" name="name" id="" placeholder="Номер телефона" />
          <button>Отправить</button>
        </form>
        <div className={style.right_inst_img}>
          <div className={style.logo}>
            <img src={logoInst} alt="logo instagram" />
          </div>
          <div className={style.gallery}>
            {gallary.map((img) => (
              <div className={style.img_gallary}>
                <img src={img} alt={img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
