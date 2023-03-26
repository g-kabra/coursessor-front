import '@/styles/globals.css'
import '@/styles/main.css'
import { ThemeProvider } from 'next-themes';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  const { theme } = pageProps;
  return (
    <ThemeProvider defaultTheme={theme}>
      <TagManager gtmId="GTM-T96R7R2" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
