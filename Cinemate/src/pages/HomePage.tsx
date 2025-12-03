import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  styled,
} from '@mui/material';

import ShowCardSkeleton from '../Skeletons/ShowCardSkeleto';
import SeriesSwiper from '../components/FilmsSliderShow';
import { useFetchShows } from '../entities/api/useFetchShow';
import ShowCardComponent from '../components/ShowCardComponent';
import ShowsCardContainer from '../components/ShowsCardContainer';
const SubscriptionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: (theme.shape.borderRadius as number) * 2,
  textAlign: 'center',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

export const HomePage = () => {
  const { shows: fxShows, loading: fxLoading } = useFetchShows('FX');
  const { shows: hboShows, loading: hboLoading } = useFetchShows('HBO');
  const { shows: netflixShows, loading: netflixLoading } =
    useFetchShows('Netflix');

  // const { shows: cultSitcomes, loading: cultSitcomsLoading } =
  //   useFetchShows('Ситком');
  return (
    <Container
      maxWidth="xl"
      sx={{ py: 4 }}
    >
      {/* Subscription Section */}
      <Grid
        container
        spacing={4}
        sx={{ mb: 6 }}
      >
        <Grid>
          <SubscriptionCard
            variant="outlined"
            sx={{ bgcolor: 'primary.light' }}
          >
            <Typography
              variant="h5"
              gutterBottom
            >
              Купить подписку
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', mb: 2 }}
            >
              749₽ в месяц
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2 }}
            >
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
        <Grid>
          <SubscriptionCard
            variant="outlined"
            sx={{ bgcolor: 'secondary.light' }}
          >
            <Typography
              variant="h5"
              gutterBottom
            >
              Годовая подписка
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', mb: 2 }}
            >
              499₽ в месяц
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2 }}
            >
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

      {/* FX Section */}
      <ShowsCardContainer text="Смотри сериалы от FX">
        {fxLoading ? (
          <SeriesSwiper
            slidesPerView={4}
            spaceBetween={20}
          >
            {[...Array(4)].map((_, i) => (
              <ShowCardSkeleton key={i} />
            ))}
          </SeriesSwiper>
        ) : (
          <SeriesSwiper>
            {fxShows.map((show) => (
              <ShowCardComponent
                key={show._id}
                show={show}
              />
            ))}
          </SeriesSwiper>
        )}
      </ShowsCardContainer>

      {/* Культовые ситкомы */}
      {/* <ShowsCardContainer text="Культовые ситкомы">
        {cultSitcomsLoading ? (
          <Typography>Загрузка...</Typography>
        ) : (
          <SeriesSwiper
            slidesPerView={4}
            spaceBetween={20}
          >
            {cultSitcomes.map((show) => (
              <ShowCardComponent
                key={show._id}
                show={show}
              />
            ))}
          </SeriesSwiper>
        )}
      </ShowsCardContainer> */}

      {/* HBO Section */}
      <ShowsCardContainer text="Сериалы HBO">
        {hboLoading ? (
          <SeriesSwiper
            slidesPerView={4}
            spaceBetween={20}
          >
            {[...Array(4)].map((_, i) => (
              <ShowCardSkeleton key={i} />
            ))}
          </SeriesSwiper>
        ) : (
          <SeriesSwiper
            slidesPerView={4}
            spaceBetween={20}
          >
            {hboShows.map((show) => (
              <ShowCardComponent
                key={show._id}
                show={show}
              />
            ))}
          </SeriesSwiper>
        )}
      </ShowsCardContainer>

      {/* Netflix Section */}
      <ShowsCardContainer text="Сериалы Netflix">
        {netflixLoading ? (
          <SeriesSwiper
            slidesPerView={4}
            spaceBetween={20}
          >
            {[...Array(4)].map((_, i) => (
              <ShowCardSkeleton key={i} />
            ))}
          </SeriesSwiper>
        ) : (
          <SeriesSwiper
            slidesPerView={4}
            spaceBetween={20}
          >
            {netflixShows.map((show) => (
              <ShowCardComponent
                key={show._id}
                show={show}
              />
            ))}
          </SeriesSwiper>
        )}
      </ShowsCardContainer>
    </Container>
  );
};
