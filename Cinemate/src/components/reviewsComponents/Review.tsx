import { Avatar, Box, Typography, Rating, Stack } from '@mui/material';

export default function Review() {
  return (
    <Box
      sx={{
        padding: {
          xs: '10px',
          xl: '20px',
        },
        width: {
          xs: '301px',
          xl: '377px',
        },
        backgroundColor: '#0F0F0F',
        borderRadius: '8px',
        color: 'white',
      }}
      marginTop={'10px'}
    >
      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: {
            xs: '10px',
            xl: '20px',
          },
        }}
      >
        <Avatar />
        <Typography>Макс Максимов</Typography>
        <Rating
          readOnly
          defaultValue={3}
          sx={{
            '& .MuiRating-iconFilled': {
              color: '#f5c518',
            },
            '& .MuiRating-iconEmpty': {
              color: '#d3d3d3',
            },
          }}
        />
      </Stack>
      <Typography>
        This movie was recommended to me by a very dear friend who went for the
        movie by herself. I went to the cinemas to watch but had a houseful
        board so couldn’t watch it.
      </Typography>
    </Box>
  );
}
