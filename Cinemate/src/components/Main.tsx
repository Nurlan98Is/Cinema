import { Outlet } from "react-router-dom";
import style from "./Main.module.css";
export const Main = () => {
  return (
    <div className={style.main}>
      <Outlet />
    </div>
  );
};
