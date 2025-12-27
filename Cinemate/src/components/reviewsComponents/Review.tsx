import { Avatar, Box, Typography, Rating, Stack } from '@mui/material';
interface ReviewProps {
  author: {
    firstName: string;
    lastName: string;
    _id: string;
  };
  reviewRating: number;
  reviewText: string;
}
export default function Review({
  author,
  reviewRating,
  reviewText,
}: ReviewProps) {
  console.log(reviewRating);
  const { firstName, lastName } = author;
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
        <Typography>
          {firstName} {''}
          {lastName}
        </Typography>
        <Rating
          readOnly
          value={reviewRating || 0}
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
      <Typography>{reviewText}</Typography>
    </Box>
  );
}
