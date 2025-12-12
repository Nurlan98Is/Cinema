import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../features/auth/authSlice';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Link as MuiLink,
  Divider,
  Alert,
  CircularProgress,
  Snackbar,
} from '@mui/material';
import {
  Lock as LockIcon,
  Email as EmailIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { Footer } from '../components/Footer';
import { setUser } from '../features/user/userSlice';
import { useLoginUserMutation } from '../features/auth/login/loginApi';

export const SingIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'error' as 'error' | 'success',
  });

  const [loginUser, { data, isLoading, isError, error }] =
    useLoginUserMutation();
  console.log('data', data);
  console.log('isError', isError);
  console.log('error', error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await loginUser({
        email,
        password,
      }).unwrap();
      dispatch(signIn(true));
      dispatch(setUser(result));
      setSnackbar({
        open: true,
        message: 'Успешный вход',
        severity: 'success',
      });
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container
        maxWidth="xs"
        sx={{ py: 8, flex: 1 }}
      >
        <Paper
          elevation={3}
          sx={{ p: 4, borderRadius: 2 }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <LockIcon
              color="primary"
              sx={{ fontSize: 50 }}
            />
            <Typography
              variant="h4"
              component="h1"
              sx={{ mt: 2 }}
            >
              Вход в аккаунт
            </Typography>
          </Box>

          {error && (
            <Alert
              severity="error"
              sx={{ mb: 3 }}
            >
              {'data' in error && error.data
                ? // Если есть data (FetchBaseQueryError с data)
                  typeof error.data === 'string'
                  ? error.data
                  : JSON.stringify(error.data)
                : 'error' in error
                ? error.error // FetchBaseQueryError с полем error
                : 'message' in error
                ? error.message // SerializedError
                : 'Произошла неизвестная ошибка'}
            </Alert>
          )}

          <Box
            component="form"
            onSubmit={handleLogin}
          >
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <EmailIcon
                    color="action"
                    sx={{ mr: 1 }}
                  />
                ),
              }}
            />

            <TextField
              fullWidth
              label="Пароль"
              type="password"
              variant="outlined"
              margin="normal"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <LockIcon
                    color="action"
                    sx={{ mr: 1 }}
                  />
                ),
              }}
            />

            <MuiLink
              component={Link}
              to="/forgot-password"
              variant="body2"
              display="block"
              textAlign="right"
              sx={{ mt: 1 }}
            >
              Забыли пароль?
            </MuiLink>

            <Button
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              disabled={isLoading}
              sx={{ mt: 3, py: 1.5 }}
              endIcon={isLoading ? '' : <ArrowForwardIcon />}
            >
              {isLoading ? (
                <CircularProgress
                  size={24}
                  color="inherit"
                />
              ) : (
                'Войти'
              )}
            </Button>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography
            variant="body1"
            textAlign="center"
          >
            Новый на нашей платформе?{' '}
            <MuiLink
              component={Link}
              to="/register"
              color="primary"
            >
              Регистрация
            </MuiLink>
          </Typography>
        </Paper>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            severity={snackbar.severity}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>

      <Footer />
    </Box>
  );
};
