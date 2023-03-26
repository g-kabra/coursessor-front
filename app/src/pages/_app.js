import '@/styles/globals.css'
import '@/styles/main.css'
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const { theme } = pageProps;
  return (
    <ThemeProvider defaultTheme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
