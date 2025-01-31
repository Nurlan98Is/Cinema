import { NavLink } from "react-router-dom";
import style from "./Singin.module.css";
import { Footer } from "../components/Footer";

export const SingIn = () => {
  return (
    <div>
      <div className={style.singin_bg}>
        <div className={style.singin_container}>
          <p className={style.singin_text_inter}>Вход</p>
          <input className={style.input_singin} />
          <input className={style.input_singin} />
          <button className={style.btn_singin}>Войти</button>
          <NavLink to="/">Забыли пароль?</NavLink>
          <p className={style.singin_text_new_preson}>
            Новый на нашей платформе? <NavLink to="/">РЕГИСТРАЦИЯ</NavLink>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
