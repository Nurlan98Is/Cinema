import style from "./RegistrationPage.module.css";
import { useNavigate } from "react-router-dom";
export const RegistrationPage = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/");
  };
  return (
    <div>
      <div className={style.registration_container}>
        <button onClick={navigateBack}>назад</button>
        <form action="submite" className={style.form_container}>
          <p>Email</p>
          <input type="text" />
          <p>Пароль</p>
          <input type="text" />
          <p>Имя</p>
          <input type="text" />
          <p>Фамилия (необязательно)</p>
          <input type="text" />
          <p>Возраст (необязательно)</p>
          <input type="text" />
          <p>Телефон</p>
          <input type="text" />
          <button>РЕГИСТРАЦИЯ</button>
        </form>
      </div>
    </div>
  );
};
