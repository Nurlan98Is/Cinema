import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import styles from "./ProfilePage.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.auth);
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

  return user ? (
    <div className={styles.profile_container}>
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
      <p>{userProfile.NickName}</p>
      <p>{userProfile.FirstName}</p>
      <p>{userProfile.LastName}</p>
      <p>{userProfile.Age}</p>
      <p>{userAuth?.email}</p>
    </div>
  ) : (
    navigate("/")
  );
};
