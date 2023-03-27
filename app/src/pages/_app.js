import '@/styles/globals.css'
import '@/styles/main.css'
import { ThemeProvider } from 'next-themes';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  const { theme, systemTheme } = pageProps;

  // Initialize Google Tag Manager
  if (typeof window !== 'undefined') {
    TagManager.initialize({ gtmId: 'GTM-T96R7R2' });
  }


  return (
    <ThemeProvider defaultTheme={theme} enableSystem={true}>
      <Component {...pageProps} theme={theme} systemTheme={systemTheme} />
    </ThemeProvider>
  );
}

export default MyApp;
