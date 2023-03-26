import '@/styles/globals.css'
import '@/styles/main.css'
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import GTag from '../../components/gtag';

function MyApp({ Component, pageProps }) {
  const { theme } = pageProps;
  return (
    <ThemeProvider defaultTheme={theme}>
      <GTag
        measurementId="G-GWMRVJ2DK8"
        transportUrl="https://measure.coursessor.com"
        firstPartyCollection={true}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
