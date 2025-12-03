import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Typography, Button, Stack, LinearProgress } from '@mui/material';
import SeasonsSeriesComponent from '../components/SeasonsSeriesComponent';
import { SeriesData } from '../types/seriesDataType';
export function SeriesProfilePage() {
  const { id } = useParams();
  const [seriesData, setSeriesData] = useState<SeriesData | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchDataSeries() {
    try {
      const response = await fetch(
        `https://be-cinemate.onrender.com/series/${id}`,
      );
      const data = await response.json();
      setSeriesData(data);
    } finally {
      setLoading(false);
    }
  }

  console.log('data series', seriesData);
  useEffect(() => {
    fetchDataSeries();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ width: '100%', mt: 4 }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', height: 'auto' }}>
      {/* Фон */}
      <Box
        sx={{
          backgroundImage: `url(${seriesData?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '709px',
          display: 'flex',
          alignItems: 'center',
          px: 6,
          py: 4,
          color: '#fff',
          position: 'relative',
        }}
      >
        {/* Затемнение фона */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.45)',
          }}
        />

        {/* Контент */}
        <Box sx={{ position: 'relative', zIndex: 2, maxWidth: '500px' }}>
          <Typography
            variant="h3"
            fontWeight={700}
            mb={2}
          >
            {seriesData?.title?.russian}
          </Typography>

          <Typography
            variant="body1"
            mb={3}
          >
            {seriesData?.description}
          </Typography>

          <Stack
            direction="row"
            spacing={2}
          >
            <Button
              variant="contained"
              size="large"
              color="primary"
            >
              Play now
            </Button>

            <Button
              variant="outlined"
              size="large"
              color="white"
            >
              +
            </Button>

            <Button
              variant="outlined"
              size="large"
              color="white"
            >
              +
            </Button>

            <Button
              variant="outlined"
              size="large"
              color="white"
            >
              +
            </Button>
          </Stack>
        </Box>
      </Box>
      <Stack
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          justifyContent: 'space-around',
        }}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '60%',
            },
          }}
          height={'auto'}
          paddingX={'30px'}
          backgroundColor={'#1A1A1A'}
          borderRadius={'8px'}
        >
          <Typography color="#FFFFFF">Сезоны и эпизоды</Typography>
          {seriesData?.seasons.map((season) => (
            <SeasonsSeriesComponent
              seasonNumber={season.seasonNumber}
              EpisodeSeriesCount={season.numberOfEpisodes}
              episodeList={season.episodes}
              key={season._id}
            />
          ))}
        </Box>
        <Box
          width={'416px'}
          height={'400px'}
          border={'1px solid'}
        >
          <Typography>Год выпуска</Typography>
          <Typography>{seriesData?.years?.start}</Typography>
          <Typography>Доступные языки</Typography>
          <Typography>Русский</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
