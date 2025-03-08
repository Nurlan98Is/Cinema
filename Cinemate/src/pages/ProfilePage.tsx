import { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import styles from "./ProfilePage.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface UserProfileType {
  NickName: string;
  FirstName: string;
  LastName: string;
  Age: number;
  Email: string;
}

export const ProfilePage = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.auth);
  const userAuth = auth.currentUser;
  const [userProfile, useUserProfile] = useState<UserProfileType>({});
  const [isActive, setIsActive] = useState(0);

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

  // const tabs = [
  //   { id: "favorites", label: "Любимые фильмы" },
  //   { id: "series", label: "Сериалы" },
  //   { id: "watchlist", label: "Хочу посмотреть" },
  //   { id: "reviews", label: "Отзывы" },
  // ];

  // const content = {
  //   favorites: ["Фильм 1", "Фильм 2", "Фильм 3"],
  //   series: ["Сериал 1", "Сериал 2", "Сериал 3"],
  //   watchlist: ["Фильм 4", "Фильм 5"],
  //   reviews: ["Отзыв 1", "Отзыв 2"],
  // };
  return user ? (
    <div className={styles.profile_container}>
      <div className={styles.profile_card}>
        <div
          style={{
            backgroundImage: `url(${userProfile.ProfilePhotoUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
          }}
        ></div>
        <div className={styles.profile_info}>
          <span style={{ fontSize: "30px", fontWeight: "600" }}>
            {userProfile.NickName}
          </span>
          <span style={{ fontSize: "20px", fontWeight: "300" }}>
            {userProfile.FirstName}
          </span>
          <span style={{ fontSize: "20px", fontWeight: "300" }}>
            {userProfile.LastName}
          </span>
          <span style={{ fontSize: "20px", fontWeight: "300" }}>
            {userProfile.Age}
          </span>
          <span style={{ fontSize: "20px", fontWeight: "300" }}>
            {userAuth?.email}
          </span>
        </div>
      </div>
      <div>
        <button onClick={() => setIsActive(1)}>Любимые Фильмы</button>
        <button onClick={() => setIsActive(2)}>Любимые Сериалы</button>
        <button onClick={() => setIsActive(3)}>Хочу посомтреть</button>
        <button onClick={() => setIsActive(4)}>Отзывы</button>
      </div>
    </div>
  ) : (
    navigate("/")
  );
};
