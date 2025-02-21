import styles from "./ProfileIcon.module.css";
import { useState, useEffect, useRef } from "react";
import { singIn } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProfileIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hanldeSingOut = () => {
    dispatch(singIn(false));
    navigate("/");
  };

  const navigateToProfile = () => {
    navigate("/user");
  };

  // Открытие/закрытие меню
  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        avatarRef.current &&
        !avatarRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={styles.profile_icon_container}
      onClick={toggleMenu}
      ref={avatarRef}
    >
      {isOpen && (
        <div className={styles.opened_container} ref={menuRef}>
          <div className={styles.profile_avatar}></div>
          <button className={styles.btn_profile} onClick={navigateToProfile}>
            Профиль
          </button>
          <button className={styles.btn_signout} onClick={hanldeSingOut}>
            Выйти
          </button>
        </div>
      )}
    </div>
  );
};
