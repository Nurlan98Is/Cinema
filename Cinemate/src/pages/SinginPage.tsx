import { NavLink } from "react-router-dom";
import style from "./Singin.module.css";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { singIn } from "../features/auth/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const SingIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCreditinal = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(singIn(userCreditinal.user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={style.singin_bg}>
        <div className={style.singin_container}>
          <p className={style.singin_text_inter}>Вход</p>
          <input
            className={style.input_singin}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className={style.input_singin}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={style.btn_singin} onClick={handleLogin}>
            Войти
          </button>
          <NavLink to="/">Забыли пароль?</NavLink>
          <p className={style.singin_text_new_preson}>
            Новый на нашей платформе?{" "}
            <NavLink to="/registration">РЕГИСТРАЦИЯ</NavLink>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
