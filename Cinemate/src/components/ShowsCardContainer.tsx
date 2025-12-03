import { Box, Typography } from '@mui/material';

interface ShowsCardContainerProps {
  text: string;
  children: React.ReactNode;
}

export default function ShowsCardContainer({
  text,
  children,
}: ShowsCardContainerProps) {
  return (
    <Box>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          mb: 4,
          fontWeight: 'bold',
          color: 'text.primary',
        }}
      >
        {text}
      </Typography>
      {children}
    </Box>
  );
}
