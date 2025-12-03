import { Box, Avatar, Typography } from '@mui/material';
export default function AuthorInfoContainer() {
  return (
    <Box
      width={'100%'}
      height={'74px'}
      bgcolor={'#141414'}
      borderRadius={'8px'}
      display={'flex'}
      alignItems={'center'}
      paddingX={'10px'}
      border={'1px solid #262626'}
    >
      <Avatar
        alt="Питер Толан"
        src="https://image.tmdb.org/t/p/w500/4FQITJL8furXIQJrKNJEQCiIK6J.jpg"
      />
      <Box marginLeft={'10px'}>
        <Typography color="white">Питер Толан </Typography>
        <Typography color="grey">США</Typography>
      </Box>
    </Box>
  );
}
