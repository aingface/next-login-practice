import 'styles/global.scss';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { themes } from '@styles/themes';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
