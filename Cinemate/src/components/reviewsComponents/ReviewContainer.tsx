import Review from './Review';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import WriteReviewDialog from './WriteReviewDialog';
import { SeriesData } from '../../types/seriesDataType';

interface ReviewsContainerInterface {
  seriesData: SeriesData;
}
interface ReviewDataI {
  authorId: {
    firstName: string;
    lastName: string;
    _id: string;
  };
  reviewRating: number;
  reviewText: string;
}
export default function ReviewsContainer({
  seriesData,
}: ReviewsContainerInterface) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [reviewData, setReviewData] = useState<ReviewDataI[]>([]);
  console.log(isOpenDialog);
  useEffect(() => {
    try {
      fetch(
        `https://be-cinemate.onrender.com/series/getReview/${seriesData._id}`,
      )
        .then((res) => res.json())
        .then((data) => setReviewData(data));
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log('reviewData', reviewData);
  return (
    <Box
      border={'1px solid'}
      width={'100%'}
      height={'358px'}
      borderRadius={'8px'}
      sx={{
        backgroundColor: '#1A1A1A',
        padding: { xs: '10px', xl: '40px' },
      }}
    >
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: { xs: '20px', md: '0px' },
        }}
      >
        <Typography sx={{ color: '#999999' }}>Обзор</Typography>
        <Button
          sx={{
            width: '180px',
            height: '48px',
            backgroundColor: 'black',
            ':hover': {
              backgroundColor: 'white',
              '& .MuiSvgIcon-root': {
                transform: 'rotate(90deg)',
                transition: 'transform 0.3s ease',
              },
            },
          }}
          onClick={() => setIsOpenDialog(!isOpenDialog)}
        >
          <AddIcon />
          Оставить отзыв
        </Button>
      </Stack>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          {reviewData.slice(-4).map((review) => (
            <Review
              key={review.authorId._id}
              author={review.authorId}
              reviewRating={review.reviewRating}
              reviewText={review.reviewText}
            />
          ))}
        </Box>
      </Box>
      <WriteReviewDialog
        isOpenDialog={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
        nameProduct={seriesData.title}
        productId={seriesData._id}
      />
    </Box>
  );
}
