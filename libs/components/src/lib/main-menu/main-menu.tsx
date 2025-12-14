import { AppBar, Grid, Typography } from '@mui/material';
import { dayjs } from '@nx-sample/dates';
import { useEffect, useState } from 'react';

export const MainMenu: React.FC = () => {
  const [timestamp, setTimestamp] = useState<string | null>(null);

  useEffect(() => setTimestamp(dayjs().format('MM/DD/YYYY HH:mm:ss')), []);

  return (
    <AppBar>
      <Grid container={true}>
        <Grid size={12}>
          <Typography>Main Menu</Typography>
        </Grid>
        <Grid size={12}>
          <Typography>
            {timestamp} {dayjs.tz.guess()}
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};
