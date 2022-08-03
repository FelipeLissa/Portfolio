import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
      <Toaster position='top-right'></Toaster>
    </ThemeProvider>
  );
}

export default MyApp;
