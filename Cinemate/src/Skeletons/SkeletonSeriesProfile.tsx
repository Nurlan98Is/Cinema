import { Box, Skeleton, Stack } from '@mui/material';

export default function SkeletonSeriesProfile() {
  return (
    <Box sx={{ width: '100%' }}>
      {/* Фон */}
      <Box
        sx={{
          width: '100%',
          height: '709px',
          position: 'relative',
          backgroundColor: '#2b2b2b',
        }}
      >
        <Skeleton
          variant="rectangular"
          width="100%"
          height="709px"
          sx={{ opacity: 0.3 }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            p: 6,
          }}
        >
          <Box sx={{ maxWidth: '500px', mt: 10 }}>
            <Skeleton
              variant="text"
              height={60}
              width="80%"
            />
            <Skeleton
              variant="text"
              height={20}
              width="100%"
            />
            <Skeleton
              variant="text"
              height={20}
              width="90%"
            />
            <Skeleton
              variant="text"
              height={20}
              width="70%"
              sx={{ mb: 3 }}
            />

            <Stack
              direction="row"
              spacing={2}
              mt={2}
            >
              <Skeleton
                variant="rectangular"
                width={140}
                height={50}
              />
              <Skeleton
                variant="circular"
                width={50}
                height={50}
              />
              <Skeleton
                variant="circular"
                width={50}
                height={50}
              />
              <Skeleton
                variant="circular"
                width={50}
                height={50}
              />
            </Stack>
          </Box>
        </Box>
      </Box>

      {/* Контейнеры под контент */}
      <Stack
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          justifyContent: 'space-around',
          mt: 3,
          px: 3,
        }}
      >
        {/* Сезоны */}
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '60%',
            },
            backgroundColor: '#1A1A1A',
            borderRadius: '8px',
            p: 3,
          }}
        >
          <Skeleton
            variant="text"
            height={30}
            width="40%"
            sx={{ mb: 2 }}
          />

          {/* Список сезонов */}
          {[1, 2, 3].map((n) => (
            <Box
              key={n}
              sx={{ mb: 2 }}
            >
              <Skeleton
                variant="rectangular"
                height={60}
                sx={{ borderRadius: 2 }}
              />
            </Box>
          ))}
        </Box>

        {/* Правая панель информации */}
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '30%',
            },
            backgroundColor: '#1A1A1A',
            borderRadius: '8px',
            p: 3,
            mt: { xs: 3, sm: 0 },
          }}
        >
          <Skeleton
            variant="text"
            height={30}
            width="60%"
          />
          {[1, 2, 3, 4, 5].map((n) => (
            <Skeleton
              key={n}
              variant="text"
              height={20}
              width={`${70 - n * 5}%`}
            />
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
