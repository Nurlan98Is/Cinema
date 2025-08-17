import { useNavigate } from "react-router-dom";
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
  InputAdornment
} from "@mui/material";
import {
  ArrowBack,
  Email,
  Lock,
  Person,
  Phone,
  Cake
} from "@mui/icons-material";

export const RegistrationPage = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate(-1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Обработка регистрации
    console.log("Форма отправлена");
  };

  return (
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          {/* Шапка формы */}
          <Box sx={{ mb: 4, position: 'relative' }}>
            <IconButton
                onClick={navigateBack}
                sx={{ position: 'absolute', left: 0 }}
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h4" component="h1" align="center">
              Регистрация
            </Typography>
          </Box>

          {/* Форма регистрации */}
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {/* Email */}
              <TextField
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

              {/* Возраст */}
              <TextField
                  fullWidth
                  label="Возраст"
                  type="number"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                          <Cake color="action" />
                        </InputAdornment>
                    ),
                    inputProps: { min: 0, max: 120 }
                  }}
              />

              {/* Телефон */}
              <TextField
                  fullWidth
                  required
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