import Review from './Review';
import { Box, Button, Stack, Typography } from '@mui/material';
export default function ReviewsContainer() {
  return (
    <Box
      border={'1px solid'}
      width={'100%'}
      height={'200px'}
    >
      <Box>
        <Typography>Обзор</Typography>
        <Button>Оставить отзыв</Button>
      </Box>
      <Stack
        flexDirection={'row'}
        justifyContent={'space-around'}
      >
        <Review />
        <Review />
      </Stack>
    </Box>
  );
}
