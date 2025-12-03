import { Box, Stack, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TranslateIcon from '@mui/icons-material/Translate';
import StarRateIcon from '@mui/icons-material/StarRate';
import { SeriesData } from '../types/seriesDataType';
import AuthorInfoContainer from './AuthorInfoContainer';
import RatingContainer from './RaitingContainer';
import LittleTableInfoComponent from './LittleTableInfoComponent';
interface SeriesInfoContainerProps {
  seriesData: SeriesData | null;
}
export default function SeriesInfoContainer({
  seriesData,
}: SeriesInfoContainerProps) {
  console.log('data in SIC', seriesData);

  if (!seriesData) {
    return null;
  }
  return (
    <Box
      width={'416px'}
      maxHeight={'600px'}
      border={'1px solid'}
      padding={'40px'}
      display={'flex'}
      flexDirection={'column'}
      gap={'10px'}
      bgcolor={'#1A1A1A'}
      borderRadius={'8px'}
    >
      <Box>
        <Stack
          flexDirection={'row'}
          alignItems={'center'}
          spacing={1}
        >
          <CalendarTodayIcon sx={{ color: '#999999' }} />
          <Typography
            color="#999999"
            marginBottom={'10px'}
            paddingLeft={'5px'}
          >
            Год выпуска
          </Typography>
        </Stack>
        <Typography color="white">{seriesData?.years?.start}</Typography>
      </Box>

      <Box>
        <Stack
          flexDirection={'row'}
          alignItems={'center'}
          spacing={1}
        >
          <TranslateIcon sx={{ color: '#999999' }} />
          <Typography
            color="#999999"
            marginBottom={'10px'}
            paddingLeft={'5px'}
          >
            Доступные языки
          </Typography>
        </Stack>
        <LittleTableInfoComponent info="Русский" />
      </Box>
      <Box>
        <Stack
          flexDirection={'row'}
          alignItems={'center'}
          spacing={1}
        >
          <StarRateIcon sx={{ color: '#999999' }} />
          <Typography
            color="#999999"
            paddingLeft={'5px'}
          >
            Рейтинг
          </Typography>
        </Stack>
        <RatingContainer imdbRating={seriesData.imdbRating} />
      </Box>
      <Typography color="#999999">Жанр</Typography>
      <Stack
        flexDirection={'row'}
        justifyContent={'space-around'}
      >
        {seriesData.genre.map((info) => (
          <LittleTableInfoComponent info={info} />
        ))}
      </Stack>
      <Typography color="white">Режиссер</Typography>
      <AuthorInfoContainer />
    </Box>
  );
}
