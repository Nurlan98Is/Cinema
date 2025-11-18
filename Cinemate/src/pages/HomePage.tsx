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

import  fxPopularSeries  from '../FxSeriesArray';
import classicSitcoms from "../ClassicSitcomes";
import hboSeries from "../HBOseriesArray";
import netflixSeries from "../NetflixSeriesArray";

import SeriesSwiper from "../components/FilmsSliderShow";

import americanCrimeStore from '../assets/american_crime_story.jpg';
import snowFall from '../assets/snowfall.jpg';
import whatWeDoInTheShadow from '../assets/what_we_do_in_the_shadow.jpg';
import sonsOfAnarchy from '../assets/sons_of_anarchy.jpg';
import { useEffect, useState } from "react";
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
    image: `${americanCrimeStore}`
  },
  {
    title: "Снегопад",
    genres: "Драма, Криминал",
    image: `${snowFall}`
  },
  {
    title: "Чем мы заняты в тени",
    genres: "Комедия, Ужасы",
    image: `${whatWeDoInTheShadow}`
  },
  {
    title: "Сыны Анархии",
    genres: "Триллер, Драма, Криминал",
    image: `${sonsOfAnarchy}`
  }
];

export const HomePage = () => {
  // const [isdata, setisdata] = useState('')
  // useEffect(() => {
  //   fetch('https://node-js-khaki-one.vercel.app/api/user')
  //     .then((res) => res.json()) // Вызываем функцию json()
  //     .then((data) => {
  //       console.log('data from node js', data)
  //       setisdata(JSON.stringify(data)) // Сохраняем данные в состояние
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error)
  //     })
  // }, [])
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
                749₽ в месяц
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                (8,990₽ за год)
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
                499₽ в месяц
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                (5,990₽ за год)
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

        <SeriesSwiper>
      {fxPopularSeries.map((show) => (
        <Grid container spacing={4} item key={show.id}>
          <ShowCard 
          sx={{ 
            width: 300, 
            minHeight: 700,
            display: 'flex',
            flexDirection: 'column'
            }}>
            <CardMedia
              component="img"
              sx={{ 
                width: '100%',
                height: 'auto',
                maxHeight: 480,
                objectFit: 'contain'
              }}
              image={show?.image}
              alt={show.title.russian}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h3">
                {show.title.russian}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {show.title.original}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {show.genre.join(", ")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {show.years.start} - {show.years.end || "н.в."} • {show.seasons} сезонов
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Рейтинг IMDb: {show.imdbRating}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" sx={{ textTransform: "none" }}>
                Подробнее
              </Button>
            </CardActions>
          </ShowCard>
        </Grid>
      ))}
    </SeriesSwiper>

    <Typography
    variant="h3"
    component='h2'
    sx={{
      mb: 4,
      fontWeight: 'bold',
      color: 'text.primary'
    }}
    >
      Культовые ситкомы
    </Typography>

    <SeriesSwiper slidesPerView={4} spaceBetween={20}>
    {classicSitcoms.map((show) => (
  <Grid container item key={show.id}>
    <ShowCard 
    sx={{ 
      width: 300, 
      minHeight: 700,
      display: 'flex',
      flexDirection: 'column'
      }}
    >
      <CardMedia
        component="img"
        sx={{ 
          width: '100%',
          height: 'auto',
          maxHeight: 450,
          objectFit: 'contain'
        }}
        image={show?.image}
        alt={show.title.russian}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h3">
          {show.title.russian}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {show.title.original}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {show.genre.join(", ")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {show.years.start} - {show.years.end || "н.в."} • {show.seasons} сезонов
        </Typography>
        <Typography variant="body2" color="text.secondary">
          IMDb: {show.imdbRating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" sx={{ textTransform: "none" }}>
          Подробнее
        </Button>
      </CardActions>
    </ShowCard>
  </Grid>
))}
</SeriesSwiper>

<Typography
    variant="h3"
    component='h2'
    sx={{
      mb: 4,
      fontWeight: 'bold',
      color: 'text.primary'
    }}
    >
      Серилы HBO
    </Typography>

    <SeriesSwiper slidesPerView={4} spaceBetween={20}>
  {hboSeries.map((show) => (
    <Grid container item key={show.id}>
      <ShowCard 
      sx={{ 
        width: 300, 
        minHeight: 700,
        display: 'flex',
        flexDirection: 'column'
        }}
      >
        <CardMedia
          component="img"
          sx={{ 
            width: '100%',
            height: 'auto',
            maxHeight: 480,
            objectFit: 'contain'
          }}
          image={show?.image}
          alt={show.title.russian}
        />
        <CardContent sx={{ flexGrow: 1, overflow: 'auto' }}>
          <Typography gutterBottom variant="h6" component="h3">
            {show.title.russian}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {show.title.original}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {show.genre.join(", ")}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {show.years.start} - {show.years.end || "н.в."} • {show.seasons} сезонов
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Рейтинг IMDb: {show.imdbRating}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" sx={{ textTransform: "none" }}>
            Подробнее
          </Button>
        </CardActions>
      </ShowCard>
    </Grid>
  ))}
</SeriesSwiper>

<Typography
    variant="h3"
    component='h2'
    sx={{
      mb: 4,
      fontWeight: 'bold',
      color: 'text.primary'
    }}
    >
      Серилы Netflix
    </Typography>
    <SeriesSwiper slidesPerView={4} spaceBetween={20}>
  {netflixSeries.map((show) => (
    <Grid container item key={show.id}>
      <ShowCard 
      sx={{ 
        width: 300, 
        minHeight: 700,
        display: 'flex',
        flexDirection: 'column'
        }}>
        <CardMedia
          component="img"
          sx={{ 
            width: '100%',
            height: 'auto',
            maxHeight: 480,
            objectFit: 'contain'
          }}
          image={show?.image}
          alt={show.title.russian}
        />
        <CardContent sx={{ flexGrow: 1, overflow: 'auto' }}>
          <Typography gutterBottom variant="h6" component="h3">
            {show.title.russian}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {show.title.original}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {show.genre.join(", ")}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {show.years.start} - {show.years.end || "н.в."} • {show.seasons} сезонов
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Рейтинг IMDb: {show.imdbRating}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" sx={{ textTransform: "none" }}>
            Подробнее
          </Button>
        </CardActions>
      </ShowCard>
    </Grid>
  ))}
</SeriesSwiper>

      </Container>
  );
};