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
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';
import { useAddToBeFriendMutation } from '../../features/user/usersApi';
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
  const [addToBeFriends, { isLoading, isError, isSuccess, data }] =
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
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
