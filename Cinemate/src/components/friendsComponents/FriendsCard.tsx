import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';
import {
  useAddToBeFriendMutation,
  useRemoveRequestToBeFrinedMutation,
} from '../../features/user/usersApi';
import { MouseEvent } from 'react';

interface Friend {
  _id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  nickName: string;
}
interface FriendsCardProps {
  friendsList: Friend[];
  isRequest?: boolean;
  isFriend?: boolean;
  isSentReq?: boolean;
  loading: boolean;
}
export default function FriendsCard({
  friendsList,
  isRequest,
  isFriend,
  isSentReq,
  loading,
}: FriendsCardProps) {
  const [addToBeFriends, { isLoading, isError, isSuccess }] =
    useAddToBeFriendMutation();
  console.log('isLoad tbf', isLoading);
  console.log('isError tbf', isError);
  console.log('isSuccess tbf', isSuccess);
  const addToFriends = async (id: string) => {
    const result = addToBeFriends({
      id,
    }).unwrap();
    console.log('res to be frined', result);
  };
  const [
    removeRequestToBeFrined,
    {
      isLoading: isLoadingRemoveRequest,
      isError: isErrorRemoveRequest,
      isSuccess: isSuccessRemoveRequest,
      data: isDataRemoveRequest,
    },
  ] = useRemoveRequestToBeFrinedMutation();
  console.log('loading remove', isLoadingRemoveRequest);
  console.log('Error remove', isErrorRemoveRequest);
  console.log(' success remove', isSuccessRemoveRequest);
  console.log('data in remove', isDataRemoveRequest);
  /* ================= SKELETON ================= */
  if (loading) {
    return (
      <Stack spacing={1.5}>
        {[...Array(5)].map((_, i) => (
          <Card
            key={i}
            sx={{ borderRadius: 3 }}
          >
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Skeleton
                  variant="circular"
                  width={44}
                  height={44}
                />
                <Box flex={1}>
                  <Skeleton
                    width="60%"
                    height={18}
                  />
                  <Skeleton
                    width="40%"
                    height={14}
                  />
                </Box>
                <Skeleton
                  width={80}
                  height={32}
                />
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    );
  }
  const removeToBeFrinedFn = async (
    event: MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const result = await removeRequestToBeFrined({ id }).unwrap();
      console.log('result from removeTobeFrined', result);
    } catch (error) {
      console.error('Error removing friend request:', error);
    }
  };

  /* ================= CONTENT ================= */
  return (
    <Stack spacing={1.5}>
      {friendsList.map((friend) => (
        <Card
          key={friend._id}
          component={Link}
          to={`/profile/user/${friend._id}`}
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            borderRadius: 3,
            boxShadow: 'none',
            border: '1px solid #dbdbdb',
            transition: '0.2s',
            '&:hover': {
              backgroundColor: '#fafafa',
            },
          }}
        >
          <CardContent sx={{ py: 1.5 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              {/* LEFT */}
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Avatar
                  src={friend.avatar || ''}
                  alt={friend.firstName}
                  sx={{ width: 44, height: 44 }}
                />

                <Box>
                  <Typography
                    fontWeight={600}
                    fontSize={14}
                    lineHeight={1.2}
                  >
                    {friend.firstName} {friend.lastName}
                  </Typography>
                  <Typography
                    fontSize={13}
                    color="text.secondary"
                  >
                    @{friend.nickName || 'username'}
                  </Typography>
                </Box>
              </Stack>

              {/* RIGHT */}
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
              >
                {isRequest && (
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: 'none',
                      borderRadius: 2,
                      fontSize: 13,
                      px: { xs: 1, sm: 2 },
                      minWidth: { xs: 36, sm: 'auto' },
                      boxShadow: 'none',
                    }}
                    startIcon={<PersonAddIcon fontSize="small" />}
                    onClick={(e) => {
                      e.preventDefault();
                      addToFriends(friend._id);
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        display: { xs: 'none', sm: 'inline' },
                      }}
                    >
                      Добавить в друзья
                    </Box>
                  </Button>
                )}
                {isFriend && (
                  <IconButton
                    size="small"
                    onClick={(e) => e.preventDefault()}
                  >
                    <EmailIcon fontSize="small" />
                  </IconButton>
                )}
                {isSentReq && (
                  <Button
                    style={{ backgroundColor: 'white', color: 'red' }}
                    onClick={(e) => {
                      removeToBeFrinedFn(e, friend._id);
                    }}
                  >
                    <CancelIcon />
                  </Button>
                )}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
