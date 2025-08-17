import { Link } from "react-router-dom";
import {
    Container,
    Grid,
    Typography,
    Link as MuiLink,
    Divider,
    Box,
    IconButton
} from "@mui/material";
import {
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
    Email,
    Work
} from "@mui/icons-material";

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                px: 2,
                backgroundColor: 'background.paper',
                borderTop: '1px solid',
                borderColor: 'divider',
                mt: 'auto'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* О нас */}
                    <Grid >
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            О Нас
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Cinemate - это современный киносервис с богатой коллекцией фильмов и сериалов.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                            <IconButton aria-label="Facebook">
                                <Facebook />
                            </IconButton>
                            <IconButton aria-label="Twitter">
                                <Twitter />
                            </IconButton>
                            <IconButton aria-label="Instagram">
                                <Instagram />
                            </IconButton>
                            <IconButton aria-label="LinkedIn">
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Контакты */}
                    <Grid>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Контакты
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Email fontSize="small" />
                            <Typography variant="body2">
                                Техподдержка: {' '}
                                <MuiLink href="mailto:cinemate.tekhsupport@gmail.com" underline="hover">
                                    cinemate.tekhsupport@gmail.com
                                </MuiLink>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Work fontSize="small" />
                            <Typography variant="body2">
                                Вакансии: {' '}
                                <MuiLink href="mailto:cinemate.job@gmail.com" underline="hover">
                                    cinemate.job@gmail.com
                                </MuiLink>
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Сервис */}
                    <Grid >
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Сервис
                        </Typography>
                        <MuiLink
                            component={Link}
                            to="/register"
                            color="inherit"
                            underline="hover"
                            display="block"
                            mb={1}
                        >
                            Регистрация
                        </MuiLink>
                        <MuiLink
                            component={Link}
                            to="/subscribe"
                            color="inherit"
                            underline="hover"
                            display="block"
                            mb={1}
                        >
                            Оформление подписки
                        </MuiLink>
                        <MuiLink
                            component={Link}
                            to="/faq"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            Частые вопросы
                        </MuiLink>
                    </Grid>

                    {/* Правовая информация */}
                    <Grid >
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Правовая информация
                        </Typography>
                        <MuiLink
                            component={Link}
                            to="/terms"
                            color="inherit"
                            underline="hover"
                            display="block"
                            mb={1}
                        >
                            Пользовательское соглашение
                        </MuiLink>
                        <MuiLink
                            component={Link}
                            to="/privacy"
                            color="inherit"
                            underline="hover"
                            display="block"
                            mb={1}
                        >
                            Политика конфиденциальности
                        </MuiLink>
                        <MuiLink
                            component={Link}
                            to="/cookies"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            Политика использования cookies
                        </MuiLink>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} Cinemate. Все права защищены.
                </Typography>
            </Container>
        </Box>
    );
};