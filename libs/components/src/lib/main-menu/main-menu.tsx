import { AppBar, Grid, Typography } from '@mui/material';
import { dayjs } from '@nx-sample/dates';
import { useCallback, useEffect, useState } from 'react';

export const MainMenu = () => {
  const [timestamp, setTimestamp] = useState<string | null>(null);

  const tx = () => undefined;
  // should get a lint warning here.
  useEffect(() => setTimestamp(dayjs().format('MM/DD/YYYY HH:mm:ss')), []);

  useEffect(() => tx(), []);

  const cb = useCallback(() => tx(), []);

  return (
    <AppBar>
      <Grid container={true}>
        <Grid size={12}>
          <Typography>Main Menu</Typography>
        </Grid>
        <Grid size={12}>
          <Typography>{timestamp}</Typography>
          <Typography>{cb()}</Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};
