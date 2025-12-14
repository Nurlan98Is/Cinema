import { Avatar, Box, Button, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import { useSelector, UseSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function FriendsCard({ friendsList, isRequest }) {
  console.log('frined:', friendsList);

  const addToFriends = async (event, id) => {
    event.preventDefault();
    const response = await fetch(
      'https://be-cinemate.onrender.com/users/friends/addUser',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ friendId: id }),
      },
    );
    const infoData = await response.json();
    return infoData;
  };
  const sendMessage = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const response = fetch('');
  }, []);
  return (
    <Box>
      {friendsList.map((friend) => (
        <Link
          to={`/profile/user/${friend._id}`}
          key={friend._id}
        >
          <Box
            width={'100%'}
            height={'70px'}
            border={'1px solid'}
            borderRadius={'10px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            paddingX={'10px'}
          >
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-around'}
              width={'20%'}
            >
              <Avatar
                alt=""
                src=""
              />
              <Typography>{friend.firstName}</Typography>
              <Typography>{friend.lastName}</Typography>
            </Box>
            {isRequest ? (
              <Button onClick={() => addToFriends(friend._id)}>Добавить</Button>
            ) : (
              ''
            )}
            <Button onClick={(e) => e.preventDefault()}>
              <EmailIcon />
            </Button>
          </Box>
        </Link>
      ))}
    </Box>
  );
}
