import { Box, Typography } from '@mui/material';

export default function LittleTableInfoComponent({ info }: { info: string }) {
  return (
    <Box
      bgcolor={'#141414'}
      display={'inline-block'}
      borderRadius={'8px'}
      border={'1px solid #262626'}
      padding={1}
    >
      <Typography
        color="white"
        fontSize={'14px'}
      >
        {info}
      </Typography>
    </Box>
  );
}
