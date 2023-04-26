import cn from "classnames"
import css from "./HistoryQuestions.module.scss"
const HistoryQuestions = () => {
  return (
    <div className={cn("w-1/4 pl-4 py-4",css.wrapper_questions)}>
      <ul className={css.questions}>
        {/* Aquí puedes agregar tus preguntas como elementos de lista en función de los datos de tu aplicación */}
        <li>Ejemplo de pregunta 1</li>
        <li>Ejemplo de pregunta 2</li>
      </ul>
      </div>
  );
};

export default HistoryQuestions;
