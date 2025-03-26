import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { ProfileIcon } from "./Profile.icon";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { NotificationBage } from "./NotificationBage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const Header = () => {
  const user = useSelector((state: RootState) => state.auth.auth);

  const navigate = useNavigate();
  const navigationToSignInFunc = () => {
    navigate("/singin");
  };

  const userAuth = auth.currentUser;
  const [userProfile, useUserProfile] = useState({});

  const getUserFromFirestore = async (userId: string) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        useUserProfile(userSnap.data());
      } else {
        console.log("Пользователь не найден!");
      }
    } catch (error) {
      console.error("Ошибка при получении данных пользователя:", error);
    }
  };
  getUserFromFirestore(userAuth?.uid);
  //sdsdsd
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
          <ProfileIcon profile={userProfile} />
        ) : (
          <button className={style.btn_singin} onClick={navigationToSignInFunc}>
            Войти
          </button>
        )}
      </div>
    </nav>
  );
};
