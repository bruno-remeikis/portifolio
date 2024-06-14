import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.scss';
import { LanguageProvider } from '../contexts/Language';

function MyApp({ Component, pageProps }) {
  return <>
    <LanguageProvider>
      <Component {...pageProps} />
      <Analytics />
    </LanguageProvider>
  </>
}

export default MyApp;
