import '@superb-ai/ui/dist/index.css';

import { themeClass } from '@superb-ai/ui';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <div className={themeClass}><Component {...pageProps} /></div>;
}

export default MyApp;
