import { Avatar, Box, Typography, Rating, Stack } from '@mui/material';

export default function Review() {
  return (
    <Box
      border={'1px solid'}
      width={'377px'}
    >
      <Stack
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-around'}
      >
        <Avatar />
        <Typography>Макс Максимов</Typography>
        <Rating />
      </Stack>
      <Typography>
        This movie was recommended to me by a very dear friend who went for the
        movie by herself. I went to the cinemas to watch but had a houseful
        board so couldn’t watch it.
      </Typography>
    </Box>
  );
}
