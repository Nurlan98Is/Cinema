import style from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={style.footer_container}>
      <div>
        <p>O Нас:</p>
        <p>
          Связь с тех поддержкой:{" "}
          <strong>cinemate.tekhsupport@gmail.com</strong>
        </p>
        <p>
          Вакансии: <strong>cinemate.job@gmail.com</strong>
        </p>
      </div>
      <div>
        <p>Cервис:</p>
        <p>Регистрация {<Link to="">КЛИК</Link>}</p>
        <p>Оформление подписки {<Link to="">КЛИК</Link>}</p>
      </div>
    </div>
  );
};
