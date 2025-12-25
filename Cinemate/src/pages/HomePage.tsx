import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Typography,
  Paper,
  styled,
  Box,
} from '@mui/material';

import ShowCardSkeleton from '../Skeletons/ShowCardSkeleto';
//import SeriesSwiper from '../components/FilmsSliderShow';
import { useFetchShows } from '../entities/api/useFetchShow';
import ShowCardComponent from '../components/ShowCardComponent';
import ShowsCardContainer from '../components/ShowsCardContainer';

const SubscriptionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: (theme.shape.borderRadius as number) * 2,
  textAlign: 'center',
  transition: 'transform 0.3s, box-shadow 0.3s',
  flex: 1,
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

  return (
    <Container
      maxWidth="xl"
      sx={{ py: 4 }}
    >
      {/* Subscription cards section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          mb: 6,
        }}
      >
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
      </Box>

      {/* Shows sections - Горизонтально в ряд */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <ShowsCardContainer text="Смотри сериалы от FX">
          {fxLoading ? (
            <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', py: 2 }}>
              {[...Array(4)].map((_, i) => (
                <Box
                  key={i}
                  sx={{ minWidth: 250 }}
                >
                  <ShowCardSkeleton />
                </Box>
              ))}
            </Box>
          ) : (
            <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', py: 2 }}>
              {fxShows.map((show) => (
                <Box
                  key={show._id}
                  sx={{ minWidth: 250 }}
                >
                  <ShowCardComponent show={show} />
                </Box>
              ))}
            </Box>
          )}
        </ShowsCardContainer>

        <ShowsCardContainer text="Сериалы HBO">
          {hboLoading ? (
            <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', py: 2 }}>
              {[...Array(4)].map((_, i) => (
                <Box
                  key={i}
                  sx={{ minWidth: 250 }}
                >
                  <ShowCardSkeleton />
                </Box>
              ))}
            </Box>
          ) : (
            <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', py: 2 }}>
              {hboShows.map((show) => (
                <Box
                  key={show._id}
                  sx={{ minWidth: 250 }}
                >
                  <ShowCardComponent show={show} />
                </Box>
              ))}
            </Box>
          )}
        </ShowsCardContainer>

        <ShowsCardContainer text="Сериалы Netflix">
          {netflixLoading ? (
            <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', py: 2 }}>
              {[...Array(4)].map((_, i) => (
                <Box
                  key={i}
                  sx={{ minWidth: 250 }}
                >
                  <ShowCardSkeleton />
                </Box>
              ))}
            </Box>
          ) : (
            <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', py: 2 }}>
              {netflixShows.map((show) => (
                <Box
                  key={show._id}
                  sx={{ minWidth: 250 }}
                >
                  <ShowCardComponent show={show} />
                </Box>
              ))}
            </Box>
          )}
        </ShowsCardContainer>
      </Box>
    </Container>
  );
};
