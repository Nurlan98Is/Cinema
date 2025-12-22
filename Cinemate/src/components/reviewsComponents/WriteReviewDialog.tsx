import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Rating,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
interface WriteReviewDialogProps {
  isOpenDialog: boolean;
  nameProduct: {
    original: string;
    russian: string;
  };
  productId: string;
  setIsOpenDialog: (value: boolean) => void;
}
export default function WriteReviewDialog({
  isOpenDialog,
  setIsOpenDialog,
  nameProduct,
  productId,
}: WriteReviewDialogProps) {
  console.log('Product Id:', productId);
  const [text, setText] = useState('');
  const createReview = (id, text) => {
    const data = {
      id,
      text,
    };
    console.log('создан объект ревью', data);
  };
  return (
    <Dialog
      open={isOpenDialog}
      onClose={() => setIsOpenDialog(false)}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: {
            xs: 0,
            sm: '12px',
          },
          margin: {
            xs: 0,
            sm: '32px',
          },
          width: {
            xs: '100%',
            sm: '100%',
            md: '500px',
            lg: '600px',
          },
          maxWidth: {
            xs: '100%',
            sm: '500px',
            md: '500px',
            lg: '600px',
          },
          backgroundColor: 'white',
          color: '#000',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: {
            xs: '16px 16px 8px',
            sm: '20px 24px 8px',
          },
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        Отзыв
        <IconButton
          onClick={() => setIsOpenDialog(false)}
          size="small"
          sx={{ color: '#666' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          padding: {
            xs: '20px 16px',
            sm: '24px',
          },
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600 }}
          >
            {nameProduct?.russian}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="body2"
            color="#666"
            sx={{ mb: 1 }}
          >
            Ваша оценка
          </Typography>
          <Rating
            size="large"
            sx={{
              '& .MuiRating-icon': {
                fontSize: {
                  xs: '32px',
                  sm: '40px',
                },
              },
            }}
          />
        </Box>

        <Box>
          <Typography
            variant="body2"
            color="#666"
            sx={{ mb: 1 }}
          >
            Ваш отзыв
          </Typography>
          <TextField
            onChange={(e) => setText(e.target.value)}
            multiline
            rows={6}
            fullWidth
            placeholder="Напишите ваш отзыв здесь..."
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fafafa',
              },
            }}
          />
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            padding: '12px',
            marginTop: 2,
            backgroundColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
          onClick={() => createReview(productId, text)}
        >
          Оставить отзыв
        </Button>
      </DialogContent>
    </Dialog>
  );
}
