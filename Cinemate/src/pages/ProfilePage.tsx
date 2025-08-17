import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FavoriteMoviesSlider } from "../components/FavoriteMoviesSlider";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";

interface UserProfileType {
  NickName: string;
  FirstName: string;
  LastName: string;
  Age: number;
  Email: string;
  ProfilePhotoUrl?: string;
}

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  fontSize: 60,
  border: `4px solid ${theme.palette.primary.main}`,
  [theme.breakpoints.down("sm")]: {
    width: 150,
    height: 150,
  },
}));

const ProfileTab = styled(Tab)({
  fontWeight: 600,
  textTransform: "none",
  fontSize: "1rem",
});

export const ProfilePage = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.auth);
  const userAuth = auth.currentUser;

  const [userProfile, setUserProfile] = useState<UserProfileType>({
    NickName: "",
    FirstName: "",
    LastName: "",
    Age: 0,
    Email: "",
  });
  const [activeTab, setActiveTab] = useState(0);

  const getUserFromFirestore = async (userId: string) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUserProfile(userSnap.data() as UserProfileType);
      } else {
        console.log("Пользователь не найден!");
      }
    } catch (error) {
      console.error("Ошибка при получении данных пользователя:", error);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else if (userAuth?.uid) {
      getUserFromFirestore(userAuth.uid);
    }
  }, [user, userAuth?.uid, navigate]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  if (!user) return null;

  return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                {userProfile.ProfilePhotoUrl ? (
                    <ProfileAvatar
                        alt={userProfile.NickName}
                        src={userProfile.ProfilePhotoUrl}
                    />
                ) : (
                    <ProfileAvatar sx={{ bgcolor: deepPurple[500] }}>
                      {userProfile.FirstName?.[0]}
                      {userProfile.LastName?.[0]}
                    </ProfileAvatar>
                )}
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="h4" component="h1" gutterBottom>
                  {userProfile.NickName || "Пользователь"}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={4}>
                    <Typography variant="subtitle1" color="text.secondary">
                      Имя
                    </Typography>
                    <Typography variant="h6">
                      {userProfile.FirstName || "Не указано"}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Typography variant="subtitle1" color="text.secondary">
                      Фамилия
                    </Typography>
                    <Typography variant="h6">
                      {userProfile.LastName || "Не указано"}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Typography variant="subtitle1" color="text.secondary">
                      Возраст
                    </Typography>
                    <Typography variant="h6">
                      {userProfile.Age || "Не указан"}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" color="text.secondary">
                      Email
                    </Typography>
                    <Typography variant="h6">{userAuth?.email}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Box sx={{ width: "100%", mb: 4 }}>
          <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="profile tabs"
          >
            <ProfileTab label="Любимые фильмы" />
            <ProfileTab label="Любимые сериалы" />
            <ProfileTab label="Хочу посмотреть" />
            <ProfileTab label="Отзывы" />
          </Tabs>
        </Box>

        <Box sx={{ py: 2 }}>
          {activeTab === 0 && <FavoriteMoviesSlider />}
          {activeTab === 1 && (
              <Typography variant="h5" textAlign="center" color="text.secondary">
                Раздел с любимыми сериалами
              </Typography>
          )}
          {activeTab === 2 && (
              <Typography variant="h5" textAlign="center" color="text.secondary">
                Раздел с фильмами, которые вы хотите посмотреть
              </Typography>
          )}
          {activeTab === 3 && (
              <Typography variant="h5" textAlign="center" color="text.secondary">
                Раздел с вашими отзывами
              </Typography>
          )}
        </Box>
      </Container>
  );
};
