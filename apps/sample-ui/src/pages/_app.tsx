import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MainMenu, Box } from '@nx-sample/components';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to apps/sample-ui!</title>
      </Head>
      <main>
        <MainMenu />
        <Box sx={{ mt: '60px' }}>
          <Component {...pageProps} />
        </Box>
      </main>
    </>
  );
}
