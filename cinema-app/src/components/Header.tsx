import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
export const Header = () => {
  return (
    <nav className={style.nav}>
      <div className={style.nav_logo_links}>
        <NavLink to="/HomePage">
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
        <NavLink to="/singin">
          <button className={style.btn_singin}>Войти</button>
        </NavLink>
        <div>Ac</div>
      </div>
    </nav>
  );
};
