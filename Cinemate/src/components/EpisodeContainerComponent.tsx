import { Box, Typography, Button, Stack, useMediaQuery } from '@mui/material';
import ClockDuration from '../../public/ClockDuration.png';
import { Episodes } from '../types/seriesDataType';

export default function EpisodeContainerComponent({ episode, index }) {
  console.log('episode', index);
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(min-width:601px) and (max-width:1024px)');
  return (
    <Stack
      key={index}
      width="100%"
      direction={isMobile ? 'column' : 'row'}
      alignItems={isMobile ? 'flex-start' : 'center'}
      justifyContent={isMobile ? 'flex-start' : 'space-around'}
      borderTop="1px solid #262626"
      borderBottom="1px solid #262626"
      padding={isMobile ? '10px 0' : '0'}
      spacing={isMobile ? 1 : 0}
    >
      {/* Номер эпизода */}
      <Typography
        color="gray"
        fontSize={isMobile ? '18px' : '24px'}
        marginLeft={isMobile ? '10px' : 0}
        flexShrink={0} // номер не будет сжиматься
      >
        {index}
      </Typography>

      {/* Картинка серии */}
      <Box
        height={isMobile ? '100px' : '118px'}
        width={isMobile ? '140px' : '172px'}
        border="1px solid"
        backgroundColor="gray"
        borderRadius="8px"
        marginY={isMobile ? 1 : 0}
        flexShrink={0} // картинка не будет сжиматься
      ></Box>

      {/* Информация о серии */}
      <Stack
        width={isMobile ? '90%' : 'calc(100% - 250px)'} // динамическая ширина на ПК
        spacing={0.5}
      >
        <Stack
          direction={isMobile ? 'column' : 'row'}
          alignItems={isMobile ? 'flex-start' : 'center'}
          justifyContent="space-between"
          flexWrap="wrap"
          gap={1}
        >
          <Typography
            color="#FFFFFF"
            fontSize={isMobile ? '14px' : '16px'}
            maxWidth={isMobile ? '100%' : '70%'}
            overflowWrap="break-word"
            wordBreak="break-word"
          >
            {episode?.title.russian}
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            gap={0.5}
            padding="0 8px"
            height="33px"
            border="1px solid gray"
            backgroundColor="#262626"
            borderRadius="4px"
            flexShrink={0}
          >
            <img
              src={ClockDuration}
              alt="часы"
              style={{ height: '14px', width: '14px' }}
            />
            <Typography
              color="gray"
              fontSize={isMobile ? '12px' : '14px'}
            >
              {episode?.durationMinutes} мин
            </Typography>
          </Box>
        </Stack>

        <Typography
          color="#999999"
          fontSize={isMobile ? '12px' : '14px'}
          marginTop={0.5}
          overflowWrap="break-word"
          wordBreak="break-word"
        >
          {episode?.description}
        </Typography>
      </Stack>
    </Stack>
  );
}
