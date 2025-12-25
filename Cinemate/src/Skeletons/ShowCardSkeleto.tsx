import { Card, CardContent, Skeleton, Stack } from '@mui/material';

export default function ShowCardSkeleton() {
  return (
    <Card
      sx={{
        width: 300,
        minHeight: 700,
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 2,
      }}
    >
      {/* Картинка */}
      <Skeleton
        variant="rectangular"
        height={480}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Stack spacing={1}>
          {/* Название */}
          <Skeleton
            variant="text"
            width="80%"
            height={30}
          />

          {/* Оригинальное название */}
          <Skeleton
            variant="text"
            width="60%"
          />

          {/* Жанры */}
          <Skeleton
            variant="text"
            width="70%"
          />

          {/* Годы и сезоны */}
          <Skeleton
            variant="text"
            width="50%"
          />

          {/* Рейтинг */}
          <Skeleton
            variant="text"
            width="40%"
          />
        </Stack>
      </CardContent>

      {/* Кнопка */}
      <Skeleton
        variant="rectangular"
        height={40}
        width="40%"
        sx={{ mx: 2, borderRadius: 1 }}
      />
    </Card>
  );
}
