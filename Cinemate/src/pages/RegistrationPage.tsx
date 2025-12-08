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
export const RegistrationPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [nickName, setNickName] = useState('asda');
  const navigateBack = () => navigate(-1);

  const handleSubmit = async (e: React.FormEvent) => {
    // Обработка регистрации
    console.log('Форма отправлена', {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      phone: phone,
    });

    const response = fetch('https://be-cinemate.onrender.com/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        phoneNumber: phone,
        nickName: nickName,
      }),
    });
    
    e.preventDefault();
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
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};
