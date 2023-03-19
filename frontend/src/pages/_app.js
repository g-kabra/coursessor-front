import '@/styles/globals.css'
import '@/styles/main.css'
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  const { theme } = pageProps;
  return (
    <ThemeProvider defaultTheme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
