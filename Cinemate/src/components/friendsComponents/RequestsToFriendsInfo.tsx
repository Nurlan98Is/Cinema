import { Box, Typography } from '@mui/material';
import FriendsCard from './FriendsCard';

export default function RequestToFriendsInfo({ RequestsToFriendsInfo }) {
  console.log('Заявки в дурзья', RequestsToFriendsInfo);
  return (
    <Box
      width={'100%'}
      height={'auto'}
      border={'1px solid'}
      padding={'20px'}
    >
      <Typography>Ваши заявки в друзья: </Typography>
      {RequestToFriendsInfo == 0 ? (
        <Typography>Пока нет заявок</Typography>
      ) : (
        <FriendsCard
          friendsList={RequestsToFriendsInfo}
          isRequest={true}
        />
      )}
    </Box>
  );
}
