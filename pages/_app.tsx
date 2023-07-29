import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Montserrat } from 'next/font/google';

const font = Montserrat({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="font.className">
      <Component {...pageProps} />
    </main>
  );
}
