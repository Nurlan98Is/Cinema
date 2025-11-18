import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { signIn } from "../features/auth/authSlice";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Link as MuiLink,
  Divider,
  Alert
} from "@mui/material";
import {
  Lock as LockIcon,
  Email as EmailIcon,
  ArrowForward as ArrowForwardIcon
} from "@mui/icons-material";
import { Footer } from "../components/Footer";

export const SingIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(signIn(userCredential.user));
      navigate("/");
    } catch (error) {
      console.error(error);
      setError("Неверный email или пароль. Пожалуйста, попробуйте снова.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Container maxWidth="xs" sx={{ py: 8, flex: 1 }}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <LockIcon color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h4" component="h1" sx={{ mt: 2 }}>
                Вход в аккаунт
              </Typography>
            </Box>

            {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
            )}

            <Box component="form" onSubmit={handleLogin}>
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
                    startAdornment: <EmailIcon color="action" sx={{ mr: 1 }} />
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
                    startAdornment: <LockIcon color="action" sx={{ mr: 1 }} />
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
                  disabled={loading}
                  sx={{ mt: 3, py: 1.5 }}
                  endIcon={<ArrowForwardIcon />}
              >
                {loading ? 'Вход...' : 'Войти'}
              </Button>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="body1" textAlign="center">
              Новый на нашей платформе?{' '}
              <MuiLink component={Link} to="/registration" color="primary">
                Регистрация
              </MuiLink>
            </Typography>
          </Paper>
        </Container>

        <Footer />
      </Box>
  );
};
