import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Avatar,
  Typography,
  IconButton,
  Badge,
} from '@mui/material';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Notifications as NotificationsIcon } from '@mui/icons-material';

interface UserProfile {
  photoURL?: string;
  displayName?: string;
  [key: string]: any;
}

export const Header = () => {
  const user = useSelector((state: RootState) => state.auth.auth);
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<UserProfile>({});
  const userAuth = auth.currentUser;

  const navigationToSignInFunc = () => navigate('/signin');

  const getUserFromFirestore = async (userId: string) => {
    try {
      const userRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        setUserProfile(userSnap.data());
      }
    } catch (error) {
      console.error('Ошибка при получении данных пользователя:', error);
    }
  };

  useEffect(() => {
    if (userAuth?.uid) {
      getUserFromFirestore(userAuth.uid);
    }
  }, [userAuth?.uid]);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        py: 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 'bold',
              '&:hover': {
                color: 'primary.dark',
              },
            }}
          >
            Cinematik
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              component={NavLink}
              to="/films"
              sx={{
                textTransform: 'none',
                fontWeight: 'medium',
              }}
            >
              Фильмы
            </Button>
            <Button
              component={NavLink}
              to="/serials"
              sx={{
                textTransform: 'none',
                fontWeight: 'medium',
              }}
            >
              Сериалы
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {user ? (
            <>
              <IconButton>
                <Badge
                  badgeContent={4}
                  color="error"
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              <IconButton onClick={() => navigate('/profile/me')}>
                <Avatar
                  src={userProfile.photoURL}
                  alt={userProfile.displayName}
                  sx={{ width: 40, height: 40 }}
                />
              </IconButton>
            </>
          ) : (
            <Button
              variant="contained"
              onClick={navigationToSignInFunc}
              sx={{
                textTransform: 'none',
                borderRadius: 2,
                px: 3,
                py: 1,
              }}
            >
              Войти
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
