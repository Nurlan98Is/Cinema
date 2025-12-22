import { useEffect, useState } from 'react';
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
  Grid,
  Tab,
  Tabs,
  Typography,
  styled,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { signOut } from '../features/auth/authSlice.ts';
import { useDispatch } from 'react-redux';

import FriendsView from '../components/friendsComponents/FriendsView.tsx';
import { useGetMyProfileQuery } from '../features/user/usersApi.ts';

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
  const [userFriends, setUserFrineds] = useState([]);
  const [friendRequestReceived, setFriendRequestReceived] = useState([]);
  const [friendRequestSent, setFriendRequestSent] = useState([]);

  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(0);

  const { data: myProfile, isLoading, error } = useGetMyProfileQuery();

  useEffect(() => {
    if (myProfile) {
      setUserFrineds(myProfile.friendsList);
      setFriendRequestReceived(myProfile.friendRequestsReceived);
      setFriendRequestSent(myProfile.friendRequestsSent);
    }
  }, [myProfile]);

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
            {/* AVATAR */}
            <Grid
              display="flex"
              justifyContent="center"
              minWidth={{ xs: '100%', md: 220 }}
            >
              <ProfileAvatar
                alt={user.nickName}
                src={user.ProfilePhotoUrl || ''}
                sx={{
                  bgcolor: !user.ProfilePhotoUrl ? deepPurple[500] : undefined,
                }}
              >
                {!user.ProfilePhotoUrl &&
                  `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`}
              </ProfileAvatar>
            </Grid>

            {/* INFO */}
            <Grid flex={1}>
              <Typography
                fontSize={28}
                fontWeight={500}
                gutterBottom
              >
                {user.nickName || 'Пользователь'}
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
                    {user.firstName || '—'}
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
                    {user.lastName || '—'}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    fontSize={13}
                    color="text.secondary"
                  >
                    Возраст
                  </Typography>
                  <Typography fontWeight={600}>{user.age || '—'}</Typography>
                </Box>

                <Box>
                  <Typography
                    fontSize={13}
                    color="text.secondary"
                  >
                    Email
                  </Typography>
                  <Typography fontWeight={600}>{user.email}</Typography>
                </Box>
              </Box>
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
          <ProfileTab label="Друзья" />
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
        {activeTab === 4 && (
          <Box>
            <Box>
              <FriendsView
                friendsList={userFriends}
                friendRequestsReceived={friendRequestReceived}
                friendRequestsSent={friendRequestSent}
                loading={isLoading}
              />
            </Box>
          </Box>
        )}
      </Box>
      <Box>
        <Button onClick={() => dispatch(signOut())}>выйти</Button>
      </Box>
    </Container>
  );
};
