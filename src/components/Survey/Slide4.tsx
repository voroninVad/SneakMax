import { SubmitHandler, useForm } from "react-hook-form";
import HeaderSlide from "./HeaderSlide";
import style from "./index.module.css";
import { FC } from "react";

interface dataUser {
  name_user: string;
  email_user: string;
}

type Props = {
  firstStep: () => void;
};

const Slide4: FC<Props> = ({ firstStep }) => {
  const { register, handleSubmit } = useForm<dataUser>();
  const onSubmit: SubmitHandler<dataUser> = (data) => {
    if (data.name_user !== "" && data.email_user !== "") {
      console.log(`Имя: ${data.name_user} E-mail: ${data.email_user}`);
      firstStep();
    }
  };
  return (
    <div className={style.slide}>
      <HeaderSlide
        title={"Ваша подборка готова!"}
        desc={
          "Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями"
        }
      />
      <form className={style.slide_form} onSubmit={handleSubmit(onSubmit)}>
        <h3>Получить предложение</h3>
        <p>Получите подборку подходящих для вас моделей на почту</p>
        <input
          type="text"
          {...register("name_user")}
          placeholder="Ваше имя"
          required
        />
        <input
          type="email"
          {...register("email_user")}
          placeholder="E-mail"
          required
        />
        <button type="submit">Получить</button>
      </form>
    </div>
  );
};

export default Slide4;
