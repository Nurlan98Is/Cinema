import { Rating, Typography, Stack } from '@mui/material';

export default function RatingContainer({
  imdbRating,
}: {
  imdbRating: number;
}) {
  console.log(imdbRating);
  return (
    <Stack
      maxWidth={'199px'}
      height={'77px'}
      border={'1px solid #262626'}
      justifyContent={'center'}
      paddingLeft={'10px'}
      borderRadius={'8px'}
      bgcolor={'#141414'}
    >
      <Typography color="white">IMDb</Typography>
      <Rating
        value={imdbRating / 2}
        precision={0.5}
        readOnly
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
  );
}
