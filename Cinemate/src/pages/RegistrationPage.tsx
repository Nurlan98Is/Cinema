import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  IconButton,
  Stack,
  Divider,
  InputAdornment,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  ArrowBack,
  Email,
  Lock,
  Person,
  Phone,
  Cake,
} from '@mui/icons-material';
import { useState } from 'react';
import { useRegisterUserMutation } from '../features/auth/regitration/registrationApi';

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [nickName, setNickName] = useState('');
  const navigateBack = () => navigate(-1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>(
    'success',
  );

  const [registerUser, { data, isLoading, isError, error }] =
    useRegisterUserMutation();
  console.log('data', data);
  console.log('isLoading', isLoading);
  console.log('isError', isError);
  console.log('Error', error);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await registerUser({
        email,
        password,
        firstName,
        lastName,
        birthDate,
        phoneNumber: phone,
        nickName,
      }).unwrap();
      if (!isError) {
        setSnackbarMessage('Регистрация успешна!');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        setTimeout(() => navigate('/'), 2000);
      }
    } catch (err) {
      const message =
        (err as { data: { message: string } })?.data?.message ||
        'Ошибка регистрации. Попробуйте снова.';
      setSnackbarMessage(message);
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ py: 4 }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, borderRadius: 2 }}
      >
        {/* Шапка формы */}
        <Box sx={{ mb: 4, position: 'relative' }}>
          <IconButton
            onClick={navigateBack}
            sx={{ position: 'absolute', left: 0 }}
          >
            <ArrowBack />
          </IconButton>
          <Typography
            variant="h4"
            component="h1"
            align="center"
          >
            Регистрация
          </Typography>
        </Box>

        {/* Форма регистрации */}
        <Box
          component="form"
          onSubmit={handleSubmit}
        >
          <Stack spacing={3}>
            {/* Email */}
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              label="Email"
              type="email"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Пароль */}
            <TextField
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              label="Пароль"
              type="password"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Имя */}
            <TextField
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              label="Имя"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Фамилия */}
            <TextField
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              label="Фамилия"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
              label="Никнейм"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Возраст */}
            <TextField
              fullWidth
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              label="Дата рождения"
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Cake color="action" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Телефон */}
            <TextField
              fullWidth
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              label="Телефон"
              type="tel"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone color="action" />
                  </InputAdornment>
                ),
              }}
            />

            <Divider sx={{ my: 2 }} />

            {/* Кнопка отправки */}

            <Button
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              sx={{ py: 1.5, fontWeight: 'bold' }}
            >
              {isLoading ? (
                <CircularProgress
                  size={24}
                  color="inherit"
                />
              ) : (
                'ЗАРЕГИСТРИРОВАТЬСЯ'
              )}
            </Button>
          </Stack>
        </Box>
      </Paper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          severity={snackbarSeverity}
          onClose={() => setSnackbarOpen(false)}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};
