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
  const { id } = useParams();
  const {
    data: profile,
    isLoading,
    error,
    isFetching,
  } = useGetUserByIdQuery({ id });

  const [
    sentToBeFriendsReq,
    {
      isError,
      isLoading: isLoadingSentToBefriendsReqMutation,
      isSuccess,
      data,
    },
  ] = useSentToBefriendsReqMutation();

  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  console.log('userProfile', user);
  const [activeTab, setActiveTab] = useState(0);
  console.log('id:', id);
  console.log('data in user', profile);
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  if (!user) {
    navigate('/');
  }

  const sendToFriendRequest = async (id: string) => {
    const result = sentToBeFriendsReq({ id }).unwrap();
    console.log('result from addToBeFriends', result);
  };
  return (
    <Container
      maxWidth="lg"
      sx={{ py: 4 }}
    >
      {isLoadingSentToBefriendsReqMutation ? (
        <ProfileSkeleton />
      ) : (
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
                  <Button disabled>Заявка отправлена</Button>
                ) : (
                  <Button
                    variant="contained"
                    sx={{ mt: 3, textTransform: 'none', borderRadius: 2 }}
                    onClick={(e) => {e.preventDefault(), sendToFriendRequest(id)}}
                  >
                    Добавить в друзья
                  </Button>
                )}

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
      )}

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
