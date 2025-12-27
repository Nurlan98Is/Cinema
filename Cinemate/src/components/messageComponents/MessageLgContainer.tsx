import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import {
  Box,
  Input,
  Button,
  IconButton,
  Avatar,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';

export default function MessageContainer() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Привет! Как дела?',
      isOwn: true,
      timestamp: '10:30',
      senderName: 'Вы',
    },
    {
      id: 2,
      text: 'Привет! Всё отлично, работаю над проектом.',
      isOwn: false,
      timestamp: '10:32',
      senderName: 'Иван Иванов',
      avatar: '/avatar1.jpg',
    },
    {
      id: 3,
      text: 'Отлично! Когда сможешь показать результат?',
      isOwn: true,
      timestamp: '10:33',
      senderName: 'Вы',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      isOwn: true,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      senderName: 'Вы',
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  const handleKeyPress = (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box
      sx={{
        width: { xs: '100%', md: '48%' },
        flex: { md: 1 },
        display: 'flex',
        flexDirection: 'column',
        height: 500,
        border: '1px solid #dbdbdb',
        borderRadius: 3,
        overflow: 'hidden',
        bgcolor: '#fff',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          borderBottom: '1px solid #dbdbdb',
          bgcolor: 'background.paper',
        }}
      >
        <Avatar sx={{ mr: 2 }} />
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
          >
            Иван Иванов
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
          >
            Был(а) онлайн 5 минут назад
          </Typography>
        </Box>
      </Paper>

      <Box
        ref={messagesContainerRef}
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          bgcolor: 'grey.50',
          display: 'flex',
          flexDirection: 'column',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }}
      >
        {messages.map((message) => (
          <Message
            key={message.id}
            messageText={message.text}
            isOwn={message.isOwn}
            timestamp={message.timestamp}
            senderName={message.senderName}
            avatar={message.avatar || ''}
          />
        ))}
        <div ref={messagesEndRef} />
      </Box>

      <Divider />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          gap: 1,
          bgcolor: 'background.paper',
        }}
      >
        <IconButton size="small">
          <AttachFileIcon />
        </IconButton>

        <Input
          fullWidth
          placeholder="Введите сообщение..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          multiline
          maxRows={3}
          sx={{
            bgcolor: 'grey.50',
            borderRadius: 2,
            px: 2,
            py: 1,
          }}
        />

        <Button
          variant="contained"
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
          sx={{
            minWidth: 'auto',
            width: 40,
            height: 40,
            borderRadius: '50%',
          }}
        >
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
}
