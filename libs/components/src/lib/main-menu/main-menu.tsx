import { AppBar, Grid, Typography } from '@mui/material';
import { dayjs } from '@nx-sample/dates';

export const MainMenu: React.FC = () => {
  const now = dayjs().format('MM/DD/yyyy HH:mm:ss');

  return (
    <AppBar>
      <Grid container={true}>
        <Grid size={12}>
          <Typography>Main Menu</Typography>
        </Grid>
        <Grid size={12}>
          <Typography>Now: {now}</Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};
