import { Box, Divider, Typography } from '@mui/material';
import FriendsCard from './FriendsCard';
import { useState } from 'react';

const tabs = ['Друзья', 'Заявки', 'Отправленные'];
interface Friend {
  _id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  nickName: string;
}

interface FriendsViewProps {
  friendsList: Friend[];
  friendRequestsSent: Friend[];
  friendRequestsReceived: Friend[];
  loading: boolean;
}

export default function FriendsView({
  friendsList,
  friendRequestsSent,
  friendRequestsReceived,
  loading,
}: FriendsViewProps) {
  const [selector, setSelector] = useState(0);

  return (
    <Box
      sx={{
        maxWidth: { xs: '100%', md: '48%' },
        flex: { md: 1 },
      }}
      height={500}
      border="1px solid #dbdbdb"
      borderRadius={3}
      overflow="hidden"
      bgcolor="#fff"
    >
      {/* HEADER */}
      <Box>
        <Box
          display="flex"
          justifyContent="space-around"
          px={2}
          pt={1}
        >
          {tabs.map((tab, index) => (
            <Box
              key={tab}
              onClick={() => setSelector(index)}
              sx={{
                cursor: 'pointer',
                pb: 1,
                borderBottom:
                  selector === index
                    ? '2px solid #000'
                    : '2px solid transparent',
                transition: '0.2s',
              }}
            >
              <Typography
                fontSize={14}
                fontWeight={selector === index ? 600 : 400}
                color={selector === index ? 'text.primary' : 'text.secondary'}
              >
                {tab}
              </Typography>
            </Box>
          ))}
        </Box>

        <Divider />
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          height: 'calc(500px - 48px)',
          overflowY: 'auto',
          px: 1.5,
          pt: 1,
        }}
      >
        {selector === 0 && (
          <FriendsCard
            friendsList={friendsList}
            isRequest={false}
            isFriend={true}
            isSentReq={false}
            loading={loading}
          />
        )}

        {selector === 1 &&
          (friendRequestsReceived.length !== 0 ? (
            <FriendsCard
              friendsList={friendRequestsReceived}
              isRequest={true}
              isFriend={false}
              isSentReq={false}
              loading={loading}
            />
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Typography color="text.secondary">Пока нет заявок</Typography>
            </Box>
          ))}

        {selector === 2 &&
          (friendRequestsSent.length !== 0 ? (
            <FriendsCard
              friendsList={friendRequestsSent}
              isRequest={false}
              isFriend={false}
              isSentReq={true}
              loading={loading}
            />
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Typography color="text.secondary">
                Нет отправленных заявок
              </Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
