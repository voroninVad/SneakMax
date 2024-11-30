import style from "./index.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import logoInst from "../../assets/Instagram_logo 1.png";
import img1 from "../../assets/Rectangle 37.jpg";
import img2 from "../../assets/Rectangle 39.jpg";
import img3 from "../../assets/Rectangle 38.jpg";
import img4 from "../../assets/Rectangle 40.jpg";
import img5 from "../../assets/Rectangle 41.jpg";
const gallary = [img1, img2, img3, img4, img5];

interface dataUser {
  name_user: string;
  tel_user: string;
}

const Instagram = () => {
  const { register, handleSubmit } = useForm<dataUser>();
  const onSubmit: SubmitHandler<dataUser> = (data) => {
    if (data.name_user !== "" && data.tel_user !== "") {
      console.log(`Имя: ${data.name_user} Номер: ${data.tel_user}`);
    }
  };
  return (
    <section className={style.instagram}>
      <div className={style.container_instagram}>
        <form className={style.left_form}  onSubmit={handleSubmit(onSubmit)}>
          <h3>Есть вопросы?</h3>
          <p>Заполните форму и наш менеджер свяжется с вами</p>
          <input type="text" {...register("name_user")} id="" placeholder="Ваше имя"/>
          <input type="tel" {...register("tel_user")} id="" placeholder="Номер телефона" />
          <button>Отправить</button>
        </form>
        <div className={style.right_inst_img}>
          <div className={style.logo}>
            <img src={logoInst} alt="logo instagram" />
          </div>
          <div className={style.gallery}>
            {gallary.map((img, index) => (
              <div key={index} className={style.img_gallary}>
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
