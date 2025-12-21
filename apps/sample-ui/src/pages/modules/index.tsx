import { Grid, Card, CardContent, CardHeader } from '@nx-sample/components';

export default function ModulePage() {
  return (
    <Grid container={true}>
      <Grid size={{ xs: 6 }}>
        <Card>
          <CardHeader title={'Sample UI'} />
          <CardContent>Next.js application</CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Card>
          <CardHeader title={'Components'} />
          <CardContent>
            Library where all react components are designed. Proxies MUI.
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Card>
          <CardHeader title={'Dates'} />
          <CardContent>
            Library for date usage and customization. Proxies Dayjs.
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
