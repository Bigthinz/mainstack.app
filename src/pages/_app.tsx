import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

// import { Provider } from 'react-redux';
import '@/styles/globals.css';

// import { store } from '../store/store';
import GlobalStyles from '../styles/GlobalStyles';

const App = ({ Component, pageProps }: AppProps) => (
  <AnimatePresence exitBeforeEnter>
    <CacheProvider value={cache}>
      <GlobalStyles />
      {/* <Provider store={store}> */}
      <Component {...pageProps} />
      {/* </Provider> */}
    </CacheProvider>
  </AnimatePresence>
);

export default App;
