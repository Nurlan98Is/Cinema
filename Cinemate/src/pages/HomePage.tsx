import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Paper,
  styled
} from "@mui/material";

const SubscriptionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius as number * 2,
  textAlign: 'center',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8]
  }
}));

const ShowCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.03)'
  }
}));

const shows = [
  {
    title: "Американская история преступлений",
    genres: "Драма, Криминал, Биография, История",
    image: "src/assets/american_crime_story.jpg"
  },
  {
    title: "Снегопад",
    genres: "Драма, Криминал",
    image: "src/assets/snowfall.jpg"
  },
  {
    title: "Чем мы заняты в тени",
    genres: "Комедия, Ужасы",
    image: "src/assets/what_we_do_in_the_shadow.jpg"
  },
  {
    title: "Сыны Анархии",
    genres: "Триллер, Драма, Криминал",
    image: "src/assets/sons_of_anarchy.jpg"
  }
];

export const HomePage = () => {
  return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Subscription Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid  >
            <SubscriptionCard variant="outlined" sx={{ bgcolor: 'primary.light' }}>
              <Typography variant="h5" gutterBottom>
                Купить подписку
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                690₽ в месяц
              </Typography>
              <Button
                  component={Link}
                  to="/subscribe"
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: 2, px: 4 }}
              >
                Купить
              </Button>
            </SubscriptionCard>
          </Grid>
          <Grid >
            <SubscriptionCard variant="outlined" sx={{ bgcolor: 'secondary.light' }}>
              <Typography variant="h5" gutterBottom>
                Годовая подписка
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                415₽ в месяц
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                (4,980₽ за год)
              </Typography>
              <Button
                  component={Link}
                  to="/subscribe"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ borderRadius: 2, px: 4 }}
              >
                Купить
              </Button>
            </SubscriptionCard>
          </Grid>
        </Grid>

        {/* FX Shows Section */}
        <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 4,
              fontWeight: 'bold',
              color: 'text.primary'
            }}
        >
          Смотри сериалы от FX
        </Typography>

        <Grid container spacing={4}>
          {shows.map((show) => (
              <Grid >
                <ShowCard>
                  <CardMedia
                      component="img"
                      height="240"
                      image={show.image}
                      alt={show.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {show.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {show.genres}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        sx={{ textTransform: 'none' }}
                    >
                      Подробнее
                    </Button>
                  </CardActions>
                </ShowCard>
              </Grid>
          ))}
        </Grid>
      </Container>
  );
};