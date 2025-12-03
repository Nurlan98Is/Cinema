import { Box, Typography, Button, Stack, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import BtnImageDown from '../../public/BtnIconDown.png';
import EpisodeContainerComponent from './EpisodeContainerComponent';

export default function SeasonSeriesComponent({
  seasonNumber,
  EpisodeSeriesCount,
  episodeList,
}: {
  seasonNumber: number;
  EpisodeSeriesCount: number;
  episodeList?: any[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Медиа-запросы
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(min-width:601px) and (max-width:1024px)');

  return (
    <Box
      width="100%"
      border="1px solid"
      borderRadius="10px"
      height={isOpen ? '80px' : 'auto'}
      backgroundColor="#0F0F0F"
    >
      {/* Заголовок сезона */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        padding={isMobile ? '8px 12px' : isTablet ? '10px 16px' : '10px 20px'}
      >
        <Stack
          direction={isMobile ? 'column' : 'row'}
          alignItems={isMobile ? 'flex-start' : 'center'}
          spacing={isMobile ? 0.5 : 2}
        >
          <Typography
            fontWeight="semibold"
            fontSize={isMobile ? '16px' : '20px'}
            color="#FFFFFF"
          >
            Сезон {seasonNumber}
          </Typography>
          <Typography
            color="gray"
            fontSize={isMobile ? '14px' : '16px'}
          >
            {EpisodeSeriesCount} Серий
          </Typography>
        </Stack>
        <Button
          sx={{
            width: isMobile ? 40 : 50,
            height: isMobile ? 40 : 50,
            minWidth: 0,
            borderRadius: '50%',
            padding: 0,
            border: '1px solid gray',
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={BtnImageDown}
            alt="icon"
            style={{ width: '40%', height: '40%' }}
          />
        </Button>
      </Stack>

      {/* Список эпизодов */}
      {!isOpen &&
        episodeList?.map((episode) => (
          <EpisodeContainerComponent
            episode={episode}
            index={episode.episodeNumber}
          />
        ))}
    </Box>
  );
}
