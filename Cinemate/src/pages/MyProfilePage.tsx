import { useEffect, useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FavoriteMoviesSlider } from '../components/FavoriteMoviesSlider';
import { RootState } from '../store/store.ts';
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
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { RedoTwoTone } from '@mui/icons-material';
import { signOut } from '../features/auth/authSlice.ts';
import { useDispatch } from 'react-redux';
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
  [theme.breakpoints.down('sm')]: {
    width: 150,
    height: 150,
  },
}));

const ProfileTab = styled(Tab)({
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '1rem',
});

export const MyProfilePage = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  console.log('userProfile', user);
  const [activeTab, setActiveTab] = useState(0);
  const { id } = useParams();
  console.log('id:', id);
  useEffect(() => {
    fetch(`https://be-cinemate.onrender.com/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  }, []);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  const logOut = async () => {
    const response = await fetch('');
  };
  if (!user) {
    navigate('/');
  }

  return (
    <Container
      maxWidth="lg"
      sx={{ py: 4 }}
    >
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid
            container
            spacing={4}
            alignItems="center"
          >
            <Grid
              display="flex"
              justifyContent="center"
            >
              {user?.ProfilePhotoUrl ? (
                <ProfileAvatar
                  alt={user.nickName}
                  src={user?.ProfilePhotoUrl}
                />
              ) : (
                <ProfileAvatar sx={{ bgcolor: deepPurple[500] }}>
                  {user.firstName}
                  {user.lastName}
                </ProfileAvatar>
              )}
            </Grid>
            <Grid>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
              >
                {user.nickName || 'Пользователь'}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Grid
                container
                spacing={2}
              >
                <Grid>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    Имя
                  </Typography>
                  <Typography variant="h6">
                    {user.firstName || 'Не указано'}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    Фамилия
                  </Typography>
                  <Typography variant="h6">
                    {user.lastName || 'Не указано'}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    Возраст
                  </Typography>
                  <Typography variant="h6">
                    {user?.age || 'Не указан'}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    Email
                  </Typography>
                  <Typography variant="h6">{user.email}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box sx={{ width: '100%', mb: 4 }}>
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
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
          >
            Раздел с любимыми сериалами
          </Typography>
        )}
        {activeTab === 2 && (
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
          >
            Раздел с фильмами, которые вы хотите посмотреть
          </Typography>
        )}
        {activeTab === 3 && (
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
          >
            Раздел с вашими отзывами
          </Typography>
        )}
      </Box>
      <Box>
        <Button onClick={() => dispatch(signOut())}>выйти</Button>
      </Box>
    </Container>
  );
};
