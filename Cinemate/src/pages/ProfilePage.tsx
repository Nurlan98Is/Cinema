import { useEffect, useState } from 'react';
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
  Skeleton,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { signOut } from '../features/auth/authSlice.ts';
import { useDispatch } from 'react-redux';
interface UserProfileType {
  nickName: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
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

export const ProfilePage = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const [fUser, setFUser] = useState<UserProfileType | null>(null);
  console.log('fuser', fUser);
  const dispatch = useDispatch();
  console.log('userProfile', user);
  const [activeTab, setActiveTab] = useState(0);
  const { id } = useParams();
  console.log('id:', id);
  useEffect(() => {
    const response = fetch(`https://be-cinemate.onrender.com/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((data) => data.json())
      .then((user) => setFUser(user));
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

  const sendToFriendRequest = async (id: string) => {
    const response = await fetch(
      'https://be-cinemate.onrender.com/users/friends/sendRequest',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ friendId: id }),
      },
    );
    const info = response.json();
    return info;
  };
  return (
    <Container
      maxWidth="lg"
      sx={{ py: 4 }}
    >
      <Card
        sx={{
          mb: 4,
          borderRadius: 3,
          border: '1px solid #dbdbdb',
          boxShadow: 'none',
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={4}
            alignItems="center"
            flexWrap={{ xs: 'wrap', md: 'nowrap' }}
          >
            {/* Avatar */}
            <Grid
              display="flex"
              justifyContent="center"
              minWidth={{ xs: '100%', md: 220 }}
            >
              {fUser?.ProfilePhotoUrl ? (
                <ProfileAvatar
                  alt={fUser.nickName}
                  src={fUser.ProfilePhotoUrl}
                />
              ) : (
                <ProfileAvatar sx={{ bgcolor: deepPurple[500] }}>
                  {fUser?.firstName?.[0]}
                  {fUser?.lastName?.[0]}
                </ProfileAvatar>
              )}
            </Grid>

            {/* Info */}
            <Grid flex={1}>
              <Typography
                fontSize={28}
                fontWeight={500}
                gutterBottom
              >
                {fUser?.nickName || 'Пользователь'}
              </Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                gap={3}
                mt={2}
              >
                <Box>
                  <Typography
                    fontSize={13}
                    color="text.secondary"
                  >
                    Имя
                  </Typography>
                  <Typography fontWeight={600}>
                    {fUser?.firstName || '—'}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    fontSize={13}
                    color="text.secondary"
                  >
                    Фамилия
                  </Typography>
                  <Typography fontWeight={600}>
                    {fUser?.lastName || '—'}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    fontSize={13}
                    color="text.secondary"
                  >
                    Возраст
                  </Typography>
                  <Typography fontWeight={600}>{fUser?.age || '—'}</Typography>
                </Box>
                <Box>
                  <Typography
                    fontSize={13}
                    color="text.secondary"
                  >
                    Email
                  </Typography>
                  <Typography fontWeight={600}>
                    {fUser?.email || '—'}
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                sx={{ mt: 3, textTransform: 'none', borderRadius: 2 }}
                onClick={() => sendToFriendRequest(id)}
              >
                Добавить в друзья
              </Button>
              {/* <Button
                variant="outlined"
                color="success"
                sx={{ mt: 3, textTransform: 'none', borderRadius: 2 }}
                onClick={() => sendToFriendRequest(id)}
              >
                В списке вашех друзей
              </Button> */}
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
    </Container>
  );
};

const ProfileSkeleton = () => (
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
          <Skeleton
            variant="circular"
            width={180}
            height={180}
          />
        </Grid>

        <Grid flex={1}>
          <Skeleton
            width="40%"
            height={40}
          />
          <Skeleton
            width="80%"
            height={24}
            sx={{ mt: 2 }}
          />
          <Skeleton
            width="60%"
            height={24}
          />
          <Skeleton
            width="70%"
            height={24}
          />
          <Skeleton
            width="90%"
            height={24}
          />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
