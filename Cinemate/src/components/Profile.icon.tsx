import styles from "./ProfileIcon.module.css";
import { useState, useEffect, useRef } from "react";
import { singIn } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProfileIcon = (props: string) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(props);
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
      style={{
        backgroundImage: `url(${props.profile.ProfilePhotoUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
      }}
      /*className={styles.profile_icon_container}*/
      onClick={toggleMenu}
      ref={avatarRef}
    >
      {isOpen && (
        <div className={styles.opened_container} ref={menuRef}>
          <div
            style={{
              backgroundImage: `url(${props.profile.ProfilePhotoUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginBottom: "30px",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
            }}
          ></div>
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
