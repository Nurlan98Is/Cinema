import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { ProfileIcon } from "./Profile.icon";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const user = useSelector((state: RootState) => state.auth.auth);
  const navigate = useNavigate();
  const navigationToSignInFunc = () => {
    navigate("/singin");
  };
  console.log(user);
  return (
    <nav className={style.nav}>
      <div className={style.nav_logo_links}>
        <NavLink to="/">
          <div>Logo Cinematik</div>
        </NavLink>
        <NavLink to="/films">
          <p>Фильмы</p>
        </NavLink>
        <NavLink to="/serials">
          <p>Сериалы</p>
        </NavLink>
      </div>
      <div className={style.nav_singin_account}>
        {user ? (
          <ProfileIcon />
        ) : (
          <button className={style.btn_singin} onClick={navigationToSignInFunc}>
            Войти
          </button>
        )}
      </div>
    </nav>
  );
};
