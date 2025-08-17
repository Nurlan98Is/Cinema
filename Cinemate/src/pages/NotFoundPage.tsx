import { Link } from "react-router-dom";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { Home } from "@mui/icons-material";

export const NotFoundPage = () => {
    const theme = useTheme();

    return (
        <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
            <Box sx={{ mb: 4 }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
                        fontWeight: 700,
                        color: theme.palette.error.main,
                        lineHeight: 1,
                    }}
                >
                    404
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                        fontWeight: 500,
                        color: theme.palette.text.primary,
                        mt: 2,
                    }}
                >
                    Упс... Страница не найдена
                </Typography>
            </Box>

            <Typography
                variant="body1"
                sx={{
                    fontSize: "1.2rem",
                    mb: 4,
                    maxWidth: "600px",
                    mx: "auto",
                    color: theme.palette.text.secondary,
                }}
            >
                Страница была удалена или ещё не создана. Пожалуйста, обратитесь в
                техническую поддержку:{" "}
                <Box component="span" sx={{ color: theme.palette.primary.main }}>
                    cinemate.tekhsupport@gmail.com
                </Box>
            </Typography>

            <Button
                component={Link}
                to="/"
                variant="contained"
                size="large"
                startIcon={<Home />}
                sx={{
                    px: 4,
                    py: 2,
                    fontSize: "1.1rem",
                    borderRadius: "50px",
                    boxShadow: theme.shadows[4],
                    "&:hover": {
                        boxShadow: theme.shadows[8],
                    },
                }}
            >
                Вернуться на главную
            </Button>

            <Box sx={{ mt: 8 }}>
                <Typography variant="caption" color="text.secondary">
                    © {new Date().getFullYear()} Cinemate
                </Typography>
            </Box>
        </Container>
    );
};
