import { AppBar, Box, Typography } from '@mui/material';
import Image from 'next/image';
import { dayjs } from '@nx-sample/dates';
import bars from '@nx-sample/components/assets/bars.svg';

export const MainMenu = () => {
  return (
    <AppBar sx={{ p: '10px' }}>
      <Box display={'flex'} justifyContent={'space-around'}>
        <Image src={bars} alt={'bars'} />
        <Typography>Main Menu</Typography>
        <Typography suppressHydrationWarning={true}>
          {dayjs().format('MM/DD/YYYY HH:mm:ss')}
        </Typography>
      </Box>
    </AppBar>
  );
};
