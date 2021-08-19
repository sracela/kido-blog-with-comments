import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next'
import '../styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default appWithTranslation(MyApp);
// export default MyApp;
