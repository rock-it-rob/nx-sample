import { AppBar, Box, Typography } from '@mui/material';
import { dayjs } from '@nx-sample/dates';

export const MainMenu = () => {
  return (
    <AppBar sx={{ p: '10px' }}>
      <Box display={'flex'} justifyContent={'space-around'}>
        <Typography>Main Menu</Typography>
        <Typography suppressHydrationWarning={true}>
          {dayjs().format('MM/DD/YYYY HH:mm:ss')}
        </Typography>
      </Box>
    </AppBar>
  );
};
