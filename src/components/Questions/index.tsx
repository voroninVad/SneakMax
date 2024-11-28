import AccordionItem from "./AccordionItem";
import style from "./index.module.css";

const Questions = () => {
  return (
    <section className={style.questions}>
     <div className={style.container_questions}>
     <h3>Часто задаваемые вопросы</h3>
      <div className={style.accordion}>
        <AccordionItem title="Вопрос 1">
          <p>
            А это ответ 1: в комплексе функционируют 6 детских садов с
            площадками, воспитателями и всякими другими людьми
          </p>
        </AccordionItem>
        <AccordionItem title="Вопрос 2">
          <p>
            А это ответ 2: в комплексе функционируют 6 детских садов с
            площадками, воспитателями и всякими другими людьми
          </p>
        </AccordionItem>
      </div>
     </div>
    </section>
  );
};

export default Questions;
