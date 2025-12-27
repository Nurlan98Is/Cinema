import { Avatar, Box, Typography } from '@mui/material';
interface MessageProps {
  messageText: string;
  isOwn: boolean;
  avatar: string;
  timestamp: string;
  senderName: string;
}
export default function Message({
  messageText,
  isOwn = false,
  avatar,
  timestamp,
  senderName,
}: MessageProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: isOwn ? 'flex-end' : 'flex-start',
        mb: 2,
        px: 2,
      }}
    >
      {!isOwn && (
        <Avatar
          sx={{ mr: 1, mt: 0.5 }}
          src={avatar}
        >
          {senderName?.charAt(0)}
        </Avatar>
      )}

      <Box
        sx={{
          maxWidth: '70%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isOwn ? 'flex-end' : 'flex-start',
        }}
      >
        {!isOwn && senderName && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 0.5, ml: 1 }}
          >
            {senderName}
          </Typography>
        )}

        <Box
          sx={{
            bgcolor: isOwn ? 'primary.main' : 'grey.100',
            color: isOwn ? 'primary.contrastText' : 'text.primary',
            borderRadius: 2,
            px: 2,
            py: 1.5,
            wordBreak: 'break-word',
          }}
        >
          <Typography variant="body1">{messageText}</Typography>
        </Box>

        {timestamp && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 0.5, mx: 1 }}
          >
            {timestamp}
          </Typography>
        )}
      </Box>

      {isOwn && (
        <Avatar
          sx={{ ml: 1, mt: 0.5 }}
          src={avatar}
        />
      )}
    </Box>
  );
}
