import { useState } from 'react';
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
  Grid,
  Tab,
  Tabs,
  Typography,
  styled,
  Skeleton,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import {
  useGetUserByIdQuery,
  useSentToBefriendsReqMutation,
} from '../features/user/usersApi.ts';

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
  const { id } = useParams<{ id: string }>(); // Явно указываем тип
  const { data: profile, isLoading: isLoadingProfile } = useGetUserByIdQuery({
    id: id || '',
  });

  const [
    sentToBeFriendsReq,
    { isLoading: isLoadingSentToBefriendsReqMutation },
  ] = useSentToBefriendsReqMutation();

  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  if (!user) {
    navigate('/');
    return null; // Добавляем return после навигации
  }

  const sendToFriendRequest = async (userId: string) => {
    try {
      const result = await sentToBeFriendsReq({ id: userId }).unwrap();
      console.log('result from addToBeFriends', result);
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };

  if (isLoadingProfile || isLoadingSentToBefriendsReqMutation) {
    return <ProfileSkeleton />;
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
            {/* Avatar */}
            <Grid
              display="flex"
              justifyContent="center"
              minWidth={{ xs: '100%', md: 220 }}
            >
              {profile?.user?.ProfilePhotoUrl ? (
                <ProfileAvatar
                  alt={profile.user.nickName}
                  src={profile.user.ProfilePhotoUrl}
                />
              ) : (
                <ProfileAvatar sx={{ bgcolor: deepPurple[500] }}>
                  {profile?.user.firstName?.[0]}
                  {profile?.user.lastName?.[0]}
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
                {profile?.user.nickName || 'Пользователь'}
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
                    {profile?.user.firstName || '—'}
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
                    {profile?.user.lastName || '—'}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    fontSize={13}
                    color="text.secondary"
                  >
                    Возраст
                  </Typography>
                  <Typography fontWeight={600}>
                    {profile?.user.age || '—'}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    fontSize={13}
                    color="text.secondary"
                  >
                    Email
                  </Typography>
                  <Typography fontWeight={600}>
                    {profile?.user.email || '—'}
                  </Typography>
                </Box>
              </Box>
              {profile?.relation?.requestSent ? (
                <Button
                  disabled
                  sx={{ mt: 3, textTransform: 'none', borderRadius: 2 }}
                >
                  Заявка отправлена
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ mt: 3, textTransform: 'none', borderRadius: 2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (id) {
                      sendToFriendRequest(id);
                    }
                  }}
                  disabled={!id} // Отключаем кнопку если id нет
                >
                  Добавить в друзья
                </Button>
              )}
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
  <Container
    maxWidth="lg"
    sx={{ py: 4 }}
  >
    <Card sx={{ mb: 4, borderRadius: 3 }}>
      <CardContent>
        <Grid
          container
          spacing={4}
          alignItems="center"
        >
          <Grid
            display="flex"
            justifyContent="center"
            minWidth={{ xs: '100%', md: 220 }}
          >
            <Skeleton
              variant="circular"
              width={200}
              height={200}
            />
          </Grid>
          <Grid flex={1}>
            <Skeleton
              width="40%"
              height={40}
            />
            <Box
              display="flex"
              flexWrap="wrap"
              gap={3}
              mt={3}
            >
              <Box>
                <Skeleton
                  width={60}
                  height={20}
                />
                <Skeleton
                  width={120}
                  height={30}
                />
              </Box>
              <Box>
                <Skeleton
                  width={80}
                  height={20}
                />
                <Skeleton
                  width={140}
                  height={30}
                />
              </Box>
              <Box>
                <Skeleton
                  width={70}
                  height={20}
                />
                <Skeleton
                  width={100}
                  height={30}
                />
              </Box>
              <Box>
                <Skeleton
                  width={50}
                  height={20}
                />
                <Skeleton
                  width={180}
                  height={30}
                />
              </Box>
            </Box>
            <Skeleton
              width={180}
              height={40}
              sx={{ mt: 3 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Container>
);
