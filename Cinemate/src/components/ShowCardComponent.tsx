import {
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ShowCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

export default function ShowCardComponent({ show }: { show: any }) {
  const navigate = useNavigate();

  const navigateToPageProduct = (id: string) => {
    navigate(`/series/${id}`);
  };
  return (
    <Grid
      container
      key={show._id}
    >
      <ShowCard
        sx={{
          width: 300,
          minHeight: 700,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: 480,
            objectFit: 'contain',
          }}
          image={show?.image}
          alt={show.title.russian}
        />
        <CardContent sx={{ flexGrow: 1, overflow: 'auto' }}>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
          >
            {show.title.russian}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            {show.title.original}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            {show.genre.join(', ')}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            {show.years.start} - {show.years.end || 'н.в.'} • {show.seasons}{' '}
            сезонов
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            Рейтинг IMDb: {show.imdbRating}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            sx={{ textTransform: 'none' }}
            onClick={() => navigateToPageProduct(show._id)}
          >
            Подробнее
          </Button>
        </CardActions>
      </ShowCard>
    </Grid>
  );
}
