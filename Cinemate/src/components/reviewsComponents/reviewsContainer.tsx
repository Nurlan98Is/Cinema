import Review from './Review';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import WriteReviewDialog from './WriteReviewDialog';
import { SeriesData } from '../../types/seriesDataType';

interface ReviewsContainerInterface {
  seriesData: SeriesData;
}
export default function ReviewsContainer({
  seriesData,
}: ReviewsContainerInterface) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
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

      <Grid
        container
        spacing={3} // одинаковое расстояние между карточками
        sx={{
          height: '100%',
          width: '100%',
          margin: 0,
          '& > .MuiGrid-item': {
            paddingTop: '0 !important', // убираем верхний отступ
          },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
        >
          {' '}
          {/* Первая карточка занимает половину */}
          <Review />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          {' '}
          {/* Вторая карточка занимает вторую половину */}
          <Review />
        </Grid>
      </Grid>
      <WriteReviewDialog
        isOpenDialog={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
        nameProduct={seriesData.title}
        productId={seriesData._id}
      />
    </Box>
  );
}
